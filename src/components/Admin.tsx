import React, { useState, useEffect } from 'react';
import { Upload, X, Users, Image, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { GalleryImage } from './Gallery';

interface PhotoUpload {
  file: File;
  category: string;
  alt: string;
  preview: string;
}

interface Volunteer {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  interest: string;
  message: string | null;
}

const Admin: React.FC = () => {
  const [uploads, setUploads] = useState<PhotoUpload[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [activeSection, setActiveSection] = useState<'gallery' | 'volunteers'>('gallery');

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      if (activeSection === 'gallery') {
        fetchImages();
      } else {
        fetchVolunteers();
      }
    }
  }, [isAuthenticated, activeSection]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
  };

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (err) {
      setError('Failed to load gallery images');
      console.error('Error fetching images:', err);
    }
  };

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('volunteers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVolunteers(data || []);
      setError(null);
    } catch (err) {
      setError('Failed to load volunteer data');
      console.error('Error fetching volunteers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      setIsAuthenticated(true);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const maxSize = 10 * 1024 * 1024; // 10MB

    files.forEach(file => {
      if (file.size > maxSize) {
        setError(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      if (!file.type.startsWith('image/')) {
        setError(`File ${file.name} is not an image.`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUploads(prev => [...prev, {
          file,
          category: '',
          alt: '',
          preview: reader.result as string
        }]);
        setError(null);
      };
      reader.onerror = () => {
        setError(`Error reading file ${file.name}`);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const incompleteUploads = uploads.filter(upload => !upload.category || !upload.alt);
      if (incompleteUploads.length > 0) {
        setError('Please fill in category and alt text for all photos');
        return;
      }

      for (const upload of uploads) {
        const fileExt = upload.file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(fileName, upload.file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('gallery')
          .getPublicUrl(fileName);

        const { error: dbError } = await supabase
          .from('gallery_images')
          .insert({
            src: publicUrl,
            alt: upload.alt,
            category: upload.category
          });

        if (dbError) throw dbError;
      }

      await fetchImages();
      
      setUploads([]);
      setError(null);
    } catch (err) {
      setError('Failed to upload photos. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = async (image: GalleryImage) => {
    try {
      setLoading(true);
      
      // Extract the file name from the URL
      const fileName = image.src.split('/').pop();
      
      if (!fileName) {
        throw new Error('Invalid file name');
      }

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('gallery')
        .remove([fileName]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', image.id);

      if (dbError) throw dbError;

      // Refresh images list
      await fetchImages();
      setError(null);
    } catch (err) {
      setError('Failed to delete image. Please try again.');
      console.error('Delete error:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeUpload = (index: number) => {
    setUploads(prev => prev.filter((_, i) => i !== index));
    if (uploads.length === 1) {
      setError(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <form onSubmit={handleLogin}>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderGalleryImages = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Current Gallery Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg overflow-hidden relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900">{image.category}</p>
              <p className="text-sm text-gray-500">{image.alt}</p>
            </div>
            <button
              onClick={() => handleDeleteImage(image)}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
              title="Delete image"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      {images.length === 0 && (
        <p className="text-center py-4 text-gray-500">No images in the gallery.</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveSection('gallery')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeSection === 'gallery'
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Image className="h-5 w-5 mr-2" />
                Gallery Management
              </button>
              <button
                onClick={() => setActiveSection('volunteers')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  activeSection === 'volunteers'
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="h-5 w-5 mr-2" />
                Volunteer List
              </button>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {activeSection === 'gallery' ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <span className="text-gray-600">Click to upload photos</span>
                  <span className="text-sm text-gray-500 mt-2">JPG, PNG, GIF up to 10MB</span>
                </label>
              </div>
            </div>

            {uploads.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Selected Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {uploads.map((upload, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="relative">
                        <img
                          src={upload.preview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeUpload(index)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Category"
                        value={upload.category}
                        onChange={(e) => {
                          const newUploads = [...uploads];
                          newUploads[index].category = e.target.value;
                          setUploads(newUploads);
                        }}
                        className="w-full mt-4 px-3 py-2 border rounded-md"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Alt text"
                        value={upload.alt}
                        onChange={(e) => {
                          const newUploads = [...uploads];
                          newUploads[index].alt = e.target.value;
                          setUploads(newUploads);
                        }}
                        className="w-full mt-2 px-3 py-2 border rounded-md"
                        required
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleUpload}
                  disabled={loading}
                  className={`mt-6 px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Uploading...' : 'Upload All Photos'}
                </button>
              </div>
            )}

            {renderGalleryImages()}
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Registered Volunteers</h2>
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-green-700 border-t-transparent"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Area</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {volunteers.map((volunteer) => (
                      <tr key={volunteer.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{volunteer.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{volunteer.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{volunteer.phone || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{volunteer.interest}</td>
                        <td className="px-6 py-4">{volunteer.message || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {new Date(volunteer.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {volunteers.length === 0 && (
                  <p className="text-center py-4 text-gray-500">No volunteers registered yet.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
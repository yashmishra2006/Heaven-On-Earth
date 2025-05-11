import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface PhotoUpload {
  file: File;
  category: string;
  alt: string;
  preview: string;
}

const Admin: React.FC = () => {
  const [uploads, setUploads] = useState<PhotoUpload[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError('Invalid password');
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
      const incompleteUploads = uploads.filter(upload => !upload.category || !upload.alt);
      if (incompleteUploads.length > 0) {
        setError('Please fill in category and alt text for all photos');
        return;
      }

      // Here you would typically upload to your server/storage
      console.log('Uploading photos:', uploads);
      
      setUploads([]);
      setError(null);
    } catch (err) {
      setError('Failed to upload photos. Please try again.');
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Photo Management</h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

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
              className="mt-6 px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
            >
              Upload All Photos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
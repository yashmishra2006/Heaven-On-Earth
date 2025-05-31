import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Policies: React.FC = () => {
  const { policyType } = useParams();
  
  const renderPolicy = () => {
    switch(policyType) {
      case 'privacy':
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            <div className="space-y-4">
              <p>Heaven on Earth Foundation ("we," "our," or "us") collects only the personal information necessary to provide our services – for example, when you donate or register as a volunteer. We may collect your name, email address, phone number, postal address, and donation details (such as amount and date).</p>
              
              <h3 className="text-xl font-semibold mt-6">Data We Collect</h3>
              <p>We collect basic contact information (name, email, phone, address) and donation-related details when you fill out our forms or make a contribution. We also collect any information you volunteer when signing up as a volunteer.</p>
              
              <h3 className="text-xl font-semibold mt-6">How We Use Your Information</h3>
              <p>We use your personal data to process donations and issue receipts, to communicate with you about your donation or volunteer activities, and to fulfill legal and administrative obligations. We may send you email newsletters or updates about our programs, but only with your consent.</p>
              
              <h3 className="text-xl font-semibold mt-6">Data Security</h3>
              <p>We take data security seriously. Your information is stored on secure, access-controlled servers. Access to your personal data is restricted to authorized Foundation staff and service providers who need the data to perform their duties.</p>
              
              <h3 className="text-xl font-semibold mt-6">Your Rights</h3>
              <p>You have the right to know what personal data we hold about you and how it is used. You may request a copy of your personal information, and you can ask us to correct or update any inaccuracies.</p>
            </div>
          </>
        );
      
      case 'terms':
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Terms & Conditions</h2>
            <div className="space-y-4">
              <p>By accessing or using the Heaven on Earth Foundation website, you agree to comply with these Terms & Conditions. Please read them carefully before using our site.</p>
              
              <h3 className="text-xl font-semibold mt-6">Acceptable Use</h3>
              <p>You may use the website only for lawful purposes and in a manner consistent with these Terms. You agree not to use the site in any way that breaches applicable laws or regulations.</p>
              
              <h3 className="text-xl font-semibold mt-6">Intellectual Property</h3>
              <p>All content on this website – including text, graphics, logos, images, and software – is protected by copyright, trademark, and other proprietary rights. This content is owned or licensed by Heaven on Earth Foundation.</p>
              
              <h3 className="text-xl font-semibold mt-6">Donations</h3>
              <p>All donations made through our website are made voluntarily to support the Foundation's charitable work. When you make a donation, you agree that it is final and non-refundable.</p>
              
              <h3 className="text-xl font-semibold mt-6">Disclaimers</h3>
              <p>The Heaven on Earth Foundation website is provided "as is" without any warranties of any kind. We strive to keep information on the site accurate and up-to-date, but we do not guarantee completeness or correctness.</p>
            </div>
          </>
        );
      
      case 'refund':
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Refund & Cancellation Policy</h2>
            <div className="space-y-4">
              <p>All donations to Heaven on Earth Foundation are charitable gifts. As such, once a donation is completed, it is considered final and non-refundable.</p>
              
              <h3 className="text-xl font-semibold mt-6">No Refunds</h3>
              <p>All donations through this website are voluntary and non-refundable. By completing a donation, you acknowledge that the funds will be used for our charitable activities as described.</p>
              
              <h3 className="text-xl font-semibold mt-6">Exception – Duplicate or Erroneous Donations</h3>
              <p>In the event of a bona fide technical error (for example, if you accidentally make a duplicate donation), please contact us immediately. We will review such cases individually.</p>
              
              <h3 className="text-xl font-semibold mt-6">Cancellation</h3>
              <p>If you wish to cancel a pending donation before it is finalized, please notify us at once. If the payment has already been processed, you will need to follow the payment processor's procedures in addition to our review process.</p>
            </div>
          </>
        );
      
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Policies</h2>
            <p>Please select a policy to view:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><Link to="/policies/privacy" className="text-green-700 hover:text-green-800">Privacy Policy</Link></li>
              <li><Link to="/policies/terms" className="text-green-700 hover:text-green-800">Terms & Conditions</Link></li>
              <li><Link to="/policies/refund" className="text-green-700 hover:text-green-800">Refund & Cancellation Policy</Link></li>
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {renderPolicy()}
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link to="/" className="text-green-700 hover:text-green-800 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
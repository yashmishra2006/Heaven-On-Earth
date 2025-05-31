import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart, Gift, Users, Leaf } from 'lucide-react';

interface DonationOption {
  amount: number;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get amount from URL params if present
    const params = new URLSearchParams(location.search);
    const amount = params.get('amount');
    if (amount) {
      setSelectedAmount(Number(amount));
    }
  }, [location]);

  const donationOptions: DonationOption[] = [
    {
      amount: 500,
      label: 'Supporter',
      description: 'Provide educational materials for 5 children',
      icon: <Gift className="h-6 w-6 text-orange-500" />
    },
    {
      amount: 1000,
      label: 'Champion',
      description: 'Sponsor vocational training for 2 women',
      icon: <Users className="h-6 w-6 text-orange-500" />
    },
    {
      amount: 2000,
      label: 'Guardian',
      description: 'Fund a community health camp',
      icon: <Heart className="h-6 w-6 text-orange-500" />
    },
    {
      amount: 5000,
      label: 'Visionary',
      description: 'Support environmental initiatives',
      icon: <Leaf className="h-6 w-6 text-orange-500" />
    }
  ];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = selectedAmount || Number(customAmount);
    if (!finalAmount || finalAmount < 1) {
      alert('Please select or enter a valid donation amount');
      return;
    }
    // TODO: Implement payment processing
    console.log('Processing donation:', {
      amount: finalAmount,
      message: message.trim()
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Difference</h1>
          <p className="text-xl text-gray-600">Your support helps us create lasting change</p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Donation Amount</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {donationOptions.map((option) => (
                <button
                  key={option.amount}
                  type="button"
                  onClick={() => handleAmountSelect(option.amount)}
                  className={`flex items-start p-4 rounded-lg border-2 transition-all ${
                    selectedAmount === option.amount
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-200'
                  }`}
                >
                  <div className="flex-shrink-0">{option.icon}</div>
                  <div className="ml-4 text-left">
                    <p className="font-semibold text-gray-900">₹{option.amount}</p>
                    <p className="text-sm text-gray-600 mt-1">{option.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">Or enter custom amount</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">₹</span>
                </div>
                <input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add a Message (Optional)</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Share why you're supporting our cause..."
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-colors shadow-lg"
          >
            Donate ₹{selectedAmount || customAmount || '0'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
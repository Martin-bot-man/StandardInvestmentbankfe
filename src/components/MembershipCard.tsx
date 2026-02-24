import React, { useState } from 'react';

// Defining the props interface to satisfy TypeScript requirements
interface MembershipProps {
  title: string;
  description: string;
  subDescription: string;
}

const MembershipCard: React.FC<MembershipProps> = ({ title, description, subDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-2 border-gray-100 rounded-2xl p-5 mb-4 cursor-pointer hover:border-blue-500 transition-all bg-white shadow-sm"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-blue-900 uppercase text-sm tracking-wider">{title}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
        </div>
      </div>
      
      {isOpen && (
        <div className="mt-4 text-gray-700 animate-in fade-in slide-in-from-top-1 duration-300">
          <p className="font-medium leading-snug text-sm">{description}</p>
          <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-50 italic">
            {subDescription}
          </p>
        </div>
      )}
    </div>
  );
};

export default MembershipCard;
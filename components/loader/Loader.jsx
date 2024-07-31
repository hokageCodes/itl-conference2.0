import React from 'react';
import { FaGavel } from 'react-icons/fa'; // Importing a gavel icon to represent law

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        <FaGavel className="text-6xl text-textPrimary animate-bounce" />
        <p className="mt-4 text-lg font-semibold text-textPrimary">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;

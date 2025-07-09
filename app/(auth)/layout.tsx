import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Centered layout for authentication pages
    <main className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      {/* On medium screens (md) and up, this div will expand to fill the screen */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md md:max-w-none md:min-h-screen md:rounded-none md:flex md:items-center md:justify-center">
        {/* This inner div keeps the form constrained and readable on all screen sizes */}
        <div className="w-full md:max-w-md">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout; 
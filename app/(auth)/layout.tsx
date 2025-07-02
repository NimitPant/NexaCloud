import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Centered layout for authentication pages
    <main className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout; 
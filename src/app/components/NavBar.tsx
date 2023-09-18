import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                TrySmart
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-800">
                Dashboard
              </a>
            </Link>
            <Link href="/uploadPdf">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-800">
                Upload PDF
              </a>
            </Link>
            <Link href="/login">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-800">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

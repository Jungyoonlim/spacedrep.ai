import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './footer'; 
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <div className="layout flex flex-col min-h-screen">
        <NavBar />

        <main className="main-content flex-1">
          {children}
        </main>

        <Footer /> 
      </div>
  );
}

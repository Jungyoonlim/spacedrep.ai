import React from 'react';
import Layout from '../src/app/components/Layout';
import FlashcardApp from '../src/app/components/FlashcardApp';
import PaymentForm from '../src/app/components/PaymentForm';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-3">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        <div className="mt-6">
          <FlashcardApp />
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Upgrade to Premium</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Unlock unlimited flashcards and advanced features</p>
          <div className="mt-4">
            <PaymentForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

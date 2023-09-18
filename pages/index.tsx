import React from 'react';
import FlashcardApp from '../src/app/components/FlashcardApp';
import Layout from '../src/app/components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-3">
        <FlashcardApp />
      </div>
    </Layout>
  );
};

export default HomePage;

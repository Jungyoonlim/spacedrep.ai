import React from 'react';
import Layout from '../app/components/Layout';
import PdfUploader from '../app/components/PdfUploader';

const UploadPdf = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-3">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
          Upload PDF
        </h1>
        <PdfUploader />
      </div>
    </Layout>
  );
};

export default UploadPdf;

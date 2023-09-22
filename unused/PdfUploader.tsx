import React, { useState, useContext, createContext } from 'react';

export const ToastContext = createContext({
  toast: null,
  setToast: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const PdfUploader = () => {
  const [file, setFile] = useState(null);
  const { setToast } = useContext(ToastContext);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setToast({ type: 'error', message: 'Please select a file to upload.' });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/uploadPdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setToast({ type: 'success', message: 'File uploaded successfully.' });
        setFile(null);
      } else {
        const { message } = await response.json();
        setToast({ type: 'error', message });
      }
    } catch (error) {
      setToast({ type: 'error', message: error.message });
    }
  };

  return (
    <div className="pdf-uploader">
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default PdfUploader;

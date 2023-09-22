import React, { useContext } from 'react';
import { ToastContext } from '../lib/toast';

const Toast = () => {
  const { toast, setToast } = useContext(ToastContext);

  const handleClose = () => {
    setToast(null);
  };

  return (
    toast && (
      <div className={`toast toast-${toast.type}`}>
        <div className="toast-message">{toast.message}</div>
        <button className="toast-close" onClick={handleClose}>
          Close
        </button>
      </div>
    )
  );
};

export default Toast;

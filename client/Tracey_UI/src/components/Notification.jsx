import React, { useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#22c55e';
      case 'translate':
        return '#a855f7';
      case 'export':
        return '#0ea5e9';
      default:
        return '#22c55e';
    }
  };

  return (
    <div 
      className="notification" 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: getBackgroundColor(),
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <i className="fas fa-check-circle"></i>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
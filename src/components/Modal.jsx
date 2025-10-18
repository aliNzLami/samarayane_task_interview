'use client'

import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  const [showModal, setShowModal] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      const timeout = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${animate ? 'show' : 'hide'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div>
            {children}
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          opacity: ${animate ? 1 : 0};
        }
      `}</style>
    </div>
  );
};

export default Modal;
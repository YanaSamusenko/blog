import React from 'react';
import { Modal } from '../components/Modal';

export const MenuListModal = ({ children, isShown, onClose }) => {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      {children}
    </Modal>
  );
};


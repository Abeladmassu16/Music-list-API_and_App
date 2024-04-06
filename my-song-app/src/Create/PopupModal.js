// src/components/PopupModal.js
import React, { useState } from 'react';
import { ModalContainer, Modal, CloseButton, SubmitButton } from '../Create/ModalContainer';

const PopupModal = ({ onClose, onSubmit }) => {
  return (
    <ModalContainer>
      <Modal>
        <h2>Add New Music</h2>
        {/* Form Fields */}
        <form onSubmit={onSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Singer:</label>
            <input type="text" name="singer" />
          </div>
          <div>
            <label>Year:</label>
            <input type="text" name="year" />
          </div>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Modal>
    </ModalContainer>
  );
};

export default PopupModal;

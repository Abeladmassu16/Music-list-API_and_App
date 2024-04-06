import React, { useState } from 'react';
import styled from 'styled-components';
// Styled components definitions
const FormContainer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:first-of-type {
    background-color: #28a745;
  }

  &:last-of-type {
    background-color: #dc3545;
  }

  &:hover {
    opacity: 0.8;
  }
`;

function Insert({ onClose, onSubmit, data }) {
  // State management
  const [title, setTitle] = useState(data?.title || '');
  const [singer, setSinger] = useState(data?.singer || '');
  const [year, setYear] = useState(data?.year || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, singer, year: parseInt(year, 10) }, data?.id);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Title:
          <StyledInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Singer:
          <StyledInput type="text" value={singer} onChange={(e) => setSinger(e.target.value)} />
        </label>
        <label>
          Year:
          <StyledInput type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton type="button" onClick={onClose}>Cancel</StyledButton>
      </StyledForm>
    </FormContainer>
  );
}

export default Insert;

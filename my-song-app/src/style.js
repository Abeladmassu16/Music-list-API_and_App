// style.js
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { cloudDownloadOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';



// Assuming space, layout, and color are functions from styled-system if you want to use them
import { space, color } from 'styled-system';

export const ButtonText = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: #fff;
  height: 100%;
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: #fff;
  height: 100%;
  font-size: 1.5em;
  background: rgba(0, 0, 0, 0.08);
`;

// Container stays largely the same, just make sure it centers its children
export const Container = styled.div`
  ${space}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Adjust based on your layout needs
  width: 100%;
`;

// Title component with applied margin and color green
export const Title = styled.h1`
  ${space}
  color: green;
  text-align: center;
`;
export const Button = styled.button`
  ${space}
  ${color}
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
// Button component utilizing styled-system for spacing and color

// Table and related components styled according to the provided styles
export const Table = styled.table`
  border-collapse: collapse;
  width: 70%; 
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  th, td {
    
    padding: 12px 15px;
  }

  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
`;

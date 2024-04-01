/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const inputStyle = css`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const buttonStyle = css`
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddSongForm = () => (
  <form css={formStyle}>
    <input css={inputStyle} type="text" placeholder="Song title" />
    <input css={inputStyle} type="text" placeholder="Artist" />
    <button css={buttonStyle} type="submit">Add Song</button>
  </form>
);

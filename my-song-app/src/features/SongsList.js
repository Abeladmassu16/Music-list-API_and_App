/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const listStyle = css`
  list-style-type: none;
  padding: 0;
`;

const listItemStyle = css`
  background: #f0f0f0;
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
`;

const SongsList = ({ songs }) => (
  <ul css={listStyle}>
    {songs.map(song => (
      <li key={song.id} css={listItemStyle}>
        {song.title} - {song.artist}
      </li>
    ))}
  </ul>
);

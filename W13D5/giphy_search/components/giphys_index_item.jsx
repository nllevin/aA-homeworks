import React from 'react';

export default ({giphy}) => (
  <li>
    <img src={ giphy.images.original.url } />
  </li>
);
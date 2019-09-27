import React from 'react';

export default ({giphy}) => (
  <li className="giphy-li">
    <img src={ giphy.images.original.url } />
  </li>
);
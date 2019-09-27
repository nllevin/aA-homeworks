import React from 'react';

import GiphysIndexItem from './giphys_index_item';

export default ({ giphys }) => (
  <ul>
    { giphys.map((giphy, idx) => <GiphysIndexItem key={idx} giphy={giphy} />) }
  </ul>
);
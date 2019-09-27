import React from 'react';

import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm)
      .then(() => this.setState({ searchTerm: '' }));
  }

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={ this.handleSubmit }>
          <label htmlFor="searchTerm">Search:</label>
          <input 
            type="text" 
            id="searchTerm" 
            value={ this.state.searchTerm } 
            onChange = { this.handleChange }
          />
          <button>Get those giphys!</button>
        </form>
        <GiphysIndex giphys={ this.props.giphys } />
      </div>
    )
  }
}
import React, { Component } from 'react';

// Create a new component. This component will create
// our searchbar HTML

// Only class based components have state. Function based components do not

class SearchBar extends Component {
    constructor(props) {
      super(props);

      this.state = { term: '' };
    }

    render() {
      return (
        <div>
          <input
            value={this.state.term}
            onChange={ event => this.setState({ term: event.target.value }) } />
        </div>
      )
    }
}


// This will make our searchbar HTML available to
// upstream components

export default SearchBar;

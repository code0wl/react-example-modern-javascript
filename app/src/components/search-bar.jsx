import React from 'react';

class SearchBar extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </p>
    </form>
    );
  }
}

export default SearchBar;
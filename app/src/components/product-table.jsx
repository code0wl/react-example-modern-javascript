import React from 'react';
import Items from './items';
import SearchBar from './search-bar';

class ProductTable extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <SearchBar />
        <Items />
      </div>
    );
  }

}

export default ProductTable;
import React from 'react';
import ProductTable from './components/product-table';
import SearchBar from './components/search-bar';

class FilterableProductTable extends React.Component {

  constructor() {
    super();

    // Turn on when you are using interactive data. For static data just use a variable
    // this.state = {
    //  products: [
    //    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    //    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    //    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    //    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    //    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    //    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    //  ]
    //};
  }

  render() {

    var products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    )
  }
}

export default FilterableProductTable;

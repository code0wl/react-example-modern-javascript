import React from 'react';
import CategoryRow from './category-row';
import ProductRow from './product-row';

class ProductTable extends React.Component {

  constructor() {
    super();

  }

  render() {

    var rows = [];
    var lastCategory = null;

    this.props.products.map((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <CategoryRow category={product.category} key={product.category} />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

}

export default ProductTable;
import React from 'react';

class ProductRow extends React.Component {

  constructor(){
    super();
  }

  render() {
    var name = this.props.product.stocked ? this.props.product.name : <span className="error">{this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
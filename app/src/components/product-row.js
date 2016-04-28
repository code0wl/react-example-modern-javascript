import React from 'react';

export default ({product}) => {
    var name = product.stocked ? product.name : <span style={{color: 'red'}}> {product.name} </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};
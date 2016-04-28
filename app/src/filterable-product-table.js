import React, {Component} from 'react';
import ProductTable from './components/product-table';
import SearchBar from './components/search-bar';
import products from './models/products';

class FilterableProductTable extends Component {

    constructor() {
        super();

        this.handleUserInput = this.handleUserInput.bind(this);

        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    {...this.state}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    products={products}
                    {...this.state}
                />
            </div>
        )
    }

}

export default FilterableProductTable;

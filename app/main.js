import './stylesheets/main.css';
import React from 'react';
import {render} from 'react-dom';
import FilterableProductTable from './src/filterable-product-table';

// init shell
initShell();

function initShell() {
    var shell = document.createElement('main');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<FilterableProductTable/>, shell);
}
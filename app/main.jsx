import './stylesheets/main.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from 'react';
import {render} from 'react-dom';
import FilterableProductTable from './src/filterable-product-table'
import $  from "jquery"

// init shell
renderShell();

function renderShell() {
    var shell = document.createElement('div');
    shell.className = 'container';
    document.body.appendChild(shell);
    render(<FilterableProductTable/>, shell)
}
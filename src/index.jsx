import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {render} from 'react-dom'
import MenuItem from './components/menu-item'

(function () {
    let container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    render(<MenuItem/>, container);
})()
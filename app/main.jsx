import './stylesheets/main.css';
import React from 'react';
import Kanban from './src/Kanban';

main();

function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<Kanban />, app);
}
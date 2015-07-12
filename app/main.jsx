import './stylesheets/main.css';
import React from 'react';
import Kanban from './src/Kanban';

renderShell();

function renderShell() {
  var shell = document.createElement('div');
  shell.className = 'kanban-shell';
  document.body.appendChild(shell);
  React.render(<Kanban />, shell);
}
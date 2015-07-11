var component = require('./component');
var app = document.createElement('div');
require('./stylesheets/main.css');

document.body.appendChild(app);
app.appendChild(component());
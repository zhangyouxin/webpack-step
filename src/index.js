import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as styles from './index.css';
console.log("hello world")

let Secondary = require('./secondary')

Secondary();
// require('./index.css')


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
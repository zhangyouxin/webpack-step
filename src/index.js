import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';
import 'element-theme-default';
console.log("hello world")

let Secondary = require('./secondary')

Secondary();


// DEMO ES2015
let demo = 'DEMO';
demo = 'Hello ES2015';
window.console.log(demo);

// DEMO BABEL POLYFILL
const promise = Promise.resolve('done');
promise.then(value => {
    window.console.log(value);
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
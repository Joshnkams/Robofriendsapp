import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from '../src/App';
import registerServiceWorker from './registerServiceWorker.js';
import 'tachyons';
import { robots } from '../src/robots';
 
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));

 

serviceWorker.unregister();

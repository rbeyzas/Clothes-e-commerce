import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

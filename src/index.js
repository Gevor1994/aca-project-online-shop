import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initFirebase from './firebase/config'

initFirebase();
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();

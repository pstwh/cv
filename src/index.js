import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './css/base.css';
import './css/fonts.css';
import './css/main.css';
import './css/vendor.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

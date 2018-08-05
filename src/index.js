import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import configuration from './aws-exports';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


Amplify.configure(configuration);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

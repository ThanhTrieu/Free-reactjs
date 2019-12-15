import React from 'react';
import ReactDOM from 'react-dom';
//import AppCaculator from './Caculator';
import CheckingNumber from './CheckingNumber';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CheckingNumber />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

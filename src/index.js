import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/Component/MyTask';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

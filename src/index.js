import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './router';
import * as stores from './stores';

const Application = () => (
  <Provider { ...stores }>
    <Router/>
  </Provider>
);

ReactDOM.render(<Application/>, document.getElementById('root'));

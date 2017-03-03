import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import Router from './router';
import stores from './stores';

useStrict(true);

const Application = () => (
  <Provider { ...stores }>
    <Router/>
  </Provider>
);

ReactDOM.render(<Application/>, document.getElementById('root'));

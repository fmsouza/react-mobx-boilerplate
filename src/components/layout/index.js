import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DevTools from 'mobx-react-devtools';
import { Header } from './fragments';

export const Layout = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <div className="container">
      {children}
    </div>
    <DevTools />
  </div>
);

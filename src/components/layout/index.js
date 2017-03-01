import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './fragments';

export const Layout = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <div className="container">
      {children}
    </div>
  </div>
);

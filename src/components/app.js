import React, { Component } from 'react';
import CdownForm from './cdownForm';
export default class App extends Component {
  render() {
    return (
      <div>
        <header>
        <h1> Winter is coming</h1>
          <div className="header__skew">
          </div>
           <div className="header__subskew">
        <CdownForm />
          </div>
        </header>
      </div>
    );
  }
}
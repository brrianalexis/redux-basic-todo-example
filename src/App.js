import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './components/Button';
import Input from './components/Input';
import List from './components/List';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Button />
        <List />
      </div>
    );
  }
}

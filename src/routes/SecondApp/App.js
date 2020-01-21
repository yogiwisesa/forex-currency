import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetSampleAction, FetchAPISample } from '../../redux/actions';
import { Alert } from "react-bootstrap";
import logo from './logo.svg';

import './App.scss';
export class SecondApp extends Component {
  
  componentDidMount() {
    this.props.SetSampleAction({'Lorem': 'lorem'})
    this.props.FetchAPISample()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is the second page</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Alert variant="primary">Hello, here is a bootstrap alert!</Alert>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  SampleReducer: state.SampleReducer
});

const mapDispatchToProps = {
  SetSampleAction,
  FetchAPISample
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondApp);
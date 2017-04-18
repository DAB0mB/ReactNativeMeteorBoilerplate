import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src/App';

class ReactNativeMeteorBoilerplate extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('ReactNativeMeteorBoilerplate', () => ReactNativeMeteorBoilerplate);

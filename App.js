import 'react-native-meteor-polyfills';
import 'meteor-client';
import { MyCollection } from './api/server/collections';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import MyListView from './components/MyListView';

export default class App extends Component {
  constructor(...args) {
    super(...args);

    Meteor.startup(() => {
      this.setState({ ready: true });
      console.log(`Meteor connection status: ${Meteor.status().status}`);
    });

    this.state = {
      ready: false
    };
  }

  render() {
    if (!this.state.ready) return (<View></View>);

    return (<MyListView />);
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import 'meteor-client';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { MyCollection } from 'api/collections';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeMeteorBoilerplate extends Component {
  constructor(...args) {
    super(...args);

    Meteor.startup(() => {
      this.setState({ ready: true });
    });

    this.state = {
      ready: false
    };
  }

  render() {
    if (!this.state.ready) return (<View></View>);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeMeteorBoilerplate', () => createContainer(() => ({
  myItems: MyCollection.find().fetch()
}), ReactNativeMeteorBoilerplate));

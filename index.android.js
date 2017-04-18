/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import 'meteor-client';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'react-meteor-data';
import { MyCollection } from 'api/collections';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

let MyListViewContainer;

class ReactNativeMeteorBoilerplate extends Component {
  constructor(...args) {
    super(...args);

    Meteor.startup(() => {
      debugger;
      this.setState({ ready: true });
    });

    this.state = {
      ready: false
    };
  }

  render() {
    if (!this.state.ready) return (<View></View>);

    return (<MyListViewContainer />);
  }
}

class MyListView extends Component {
  render() {
    debugger;

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <ListView
        enableEmptySections={true}
        dataSource={dataSource.cloneWithRows(this.props.myItems)}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow({ name }) {
    return (<Text>{name}</Text>);
  }
}

MyListViewContainer = createContainer(() => {
  return {
    myItems: MyCollection.find().fetch()
  };
}, MyListView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('ReactNativeMeteorBoilerplate', () => ReactNativeMeteorBoilerplate);

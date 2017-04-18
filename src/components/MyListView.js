import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { MyCollection } from 'api/collections';
import {
  Text,
  ListView
} from 'react-native';

class MyListView extends Component {
  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <ListView
        enableEmptySections={true}
        dataSource={dataSource.cloneWithRows(this.props.items)}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow({ name }) {
    return (<Text>{name}</Text>);
  }
}

export default createContainer(() => {
  return {
    items: MyCollection.find().fetch()
  };
}, MyListView);

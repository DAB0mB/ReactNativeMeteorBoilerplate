import { Meteor } from 'meteor/meteor';
import { MyCollection } from './collections';
import { setApplicationPrefix } from 'react-native-meteor-polyfills';

//Set your custom URI Scheme for Facebook, Twitter and Google logins
setApplicationPrefix('myapp')

Meteor.startup(() => {
  if (MyCollection.find().count() != 0) return;

  MyCollection.insert({
    value: 'foo'
  });

  MyCollection.insert({
    value: 'bar'
  });

  MyCollection.insert({
    value: 'baz'
  });
});

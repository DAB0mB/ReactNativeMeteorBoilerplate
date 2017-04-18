import { Meteor } from 'meteor/meteor';
import { MyCollection } from './collections';

Meteor.startup(() => {
  if (MyCollection.find().count() != 0) return;

  MyCollection.insert({
    name: 'foo'
  });

  MyCollection.insert({
    name: 'bar'
  });

  MyCollection.insert({
    name: 'baz'
  });
});

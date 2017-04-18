import { Meteor } from 'meteor/meteor';
import { MyCollection } from './collections';

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

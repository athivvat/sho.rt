import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links.js';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function () {
    return Links.find({});
  })
});

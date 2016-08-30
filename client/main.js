import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../imports/components/ui/header.js';
import LinkCreate from '../imports/components/ui/linkCreate.js';
import { Link } from '../imports/collections/links.js';
import LinkList from '../imports/components/ui/linkList.js';

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});

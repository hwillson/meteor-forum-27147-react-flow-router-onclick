import React from 'react';
import { render } from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Widgets from '../imports/ui/components/Widgets';

FlowRouter.route('/', {
  action(params, queryParams) {
    render(<Widgets />, document.getElementById('app'));
  }
});

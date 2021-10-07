import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Example from '../pages/Example';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/example" component={Example} />
    </Switch>
  );
}

import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Lobby';
import Members from './containers/Members';
import Me from './components/Zeth';
import Vai from './containers/Curioso';


const BaseRouter = () => (
  <div>

    <Route exact path="/" component={Dashboard} />{" "}
    <Route exact path="/members" component={Members} />{" "}
    <Route exact path="/members/kovacs" component={Me} />{" "}
    <Route exact path="/curioso" component={Vai} />{" "}
  </div>
);

export default BaseRouter;

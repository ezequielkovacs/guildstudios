import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Lobby';
import Members from './containers/Members';
import Me from './components/Zeth';
import Vai from './containers/Curioso';
import Share from './containers/Contents';


const BaseRouter = () => (
  <div>

    <Route exact path="/gstudios" component={Dashboard} />{" "}
    <Route exact path="/" component={Members} />{" "}
    <Route exact path="/members" component={Members} />{" "}
    <Route exact path="/members/kovacs" component={Me} />{" "}
    <Route exact path="/curioso" component={Vai} />{" "}
    <Route exact path="/contents" component={Share} />{" "}
  </div>
);

export default BaseRouter;

import React from "react";
import Modal from "react-modal";
import { Route, Switch, useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import { useTransition, animated } from "react-spring";

import SideMenu from "./shared/side-menu/SideMenu";
import Activities from "./Home/Activities/Activities";
import Goals from "./Home/goals/Goals";
import Reports from "./Home/reports/Reports";

Modal.setAppElement("#root");
function App() {
  const LocationDisplay = withRouter(({ location }) =>
    console.log(location.pathname)
  );

  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div className="row">
      <div className="col-3">
        <SideMenu />
      </div>
      <div className="col-8">
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route path="/" exact component={Activities} />
              <Route path="/activities" component={Activities} />
              <Route path="/goals" component={Goals} />
              <Route path="/reports" component={Reports} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;

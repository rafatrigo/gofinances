import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { useTransition, animated } from 'react-spring';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => {
  const location = useLocation();
  const transictions = useTransition(location, local => local.pathname, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
      position: 'absolute',
      width: '100%',
    },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
  });

  return (
    <>
      {transictions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Dashboard} />
            <Route path="/import" component={Import} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Routes;

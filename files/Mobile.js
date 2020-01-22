import React from 'react';
import { observer } from 'mobx-react';
import { Link, StateRouter } from 'mobx-state-tree-router';

class Mobile extends React.Component {

  render() {
    const { router, views } = this.props;

    return (
      <div>
        Mobile menu
        <StateRouter router={router} />
        <Link router={router} view={views.about}>About</Link>
        <Link router={router} view={views.home}>Home</Link>
      </div>
    );
  }

}

export default observer(Mobile);

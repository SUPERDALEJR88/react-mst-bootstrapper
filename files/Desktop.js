import React from 'react';
import { observer } from 'mobx-react';
import { Link, StateRouter } from 'mobx-state-tree-router';

class Desktop extends React.Component {

  render() {
    const { router, views } = this.props;

    return (
      <div>
        Desktop menu
        <StateRouter router={router} />
        <Link router={router} view={views.home}>Home</Link>
        <Link router={router} view={views.about}>About</Link>
      </div>
    );
  }

}

export default observer(Desktop);

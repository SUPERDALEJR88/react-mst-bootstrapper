import React from 'react';
import { observer } from 'mobx-react';
import Mobile from './Mobile';
import Desktop from './Desktop';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    const { store } = this.props;
    const { viewStore } = store;

    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width < 800) {
      this.setState({ isMobile: true });
      viewStore.setIsMobile(true);
    } else {
      this.setState({ isMobile: false });
      viewStore.setIsMobile(false);
    }
  }

  render() {
    const { router, views } = this.props;
    const { isMobile } = this.state;

    if (isMobile) {
      return <Mobile router={router} views={views} />
    }

    return <Desktop router={router} views={views} />
  }

}

export default observer(App);

import React from 'react';
import { renderRoutes } from 'react-router-config';

class Layout extends React.PureComponent {

  render() {

    return (
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default Layout;
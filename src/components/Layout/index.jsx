import React from 'react';
import { renderRoutes } from 'react-router-config';

class Layout extends React.Component {

  render() {

    return (
      <div>
        <h1>this is the Layout Component</h1>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default Layout;
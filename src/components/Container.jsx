import React from 'react';
import '../styles/container.scss';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">{this.props.children}</div>
    );
  }
}

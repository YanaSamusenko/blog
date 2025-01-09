import React from 'react';
import '../styles/title.css';

export class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className="title py-4">{this.props.children}</h1>;
  }
}

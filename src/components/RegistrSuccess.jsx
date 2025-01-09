import React from 'react';
import {FormWrap} from './FormWrap.jsx';
import {Button} from './Button.jsx';

export class RegistrSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormWrap>
        <p className="mb-5">
          Email confirmed. <br />
          Your registration is now completed
        </p>
        <Button>Go to home</Button>
      </FormWrap>
    );
  }
}

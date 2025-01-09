import React from 'react';
import {FormWrap} from './FormWrap.jsx';
import {Button} from './Button.jsx';

export function EmailConfirm({email}) {
    return (
      <FormWrap>
        <div className="mb-5">
          <p>Please activate your account with the activation</p>
          <p>
            link in the email <span>{email}</span>
          </p>
          <p>Please, check your email</p>
        </div>
        <Button>Go to home</Button>
      </FormWrap>
    );
  }


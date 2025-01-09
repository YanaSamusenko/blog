import React from 'react';
import {useSelector} from 'react-redux';
import {FormSignIn} from '../components/FormSignIn.jsx';
import {texts} from '../config/text/index.js';


export function SignIn() {
  const lang = useSelector(state => state.lang);
  return <FormSignIn />
}

import {useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import {texts} from '../config/text/index.js';
import {FormField} from './FormField.jsx';
import {Button} from './Button.jsx';
import {FormWrap} from './FormWrap.jsx';

export function FormSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const nameInputRef = useRef(null);
  const lang = useSelector((state) => state.lang.value);

  useEffect(() => {
    setTimeout(() => {
      nameInputRef.current.focus();
    }, 50)
  }, []);

  const handleChangeEmail = ({target}) => setEmail(target.value);
  const handleChangePassword = ({target}) => setPassword(target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log({email, password});
  };
  return (
    <FormWrap>
      <form className="form">
        <div className="mb-5">
          <FormField
          ref = {nameInputRef}
            // label={texts[lang].formSignIn.email.label}
            name="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-5">
          <FormField
            // label={texts[lang].formSignIn.password.label}
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <p className="form__forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </p>

        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <p className="form__footer">
          Don't have an account? <a href="/login">Sign Up</a>
        </p>
      </form>
    </FormWrap>
  );
}

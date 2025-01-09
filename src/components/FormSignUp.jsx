import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {FormField} from './FormField.jsx';
import {fetchSignUp} from '../redux/auth-slice.js';
import {Button} from './Button.jsx';
import {FormWrap} from './FormWrap.jsx'
import {texts} from '../config/text/index.js';

export function FormSignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const lang = useSelector((state) => state.lang.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isSubmit } = useSelector(state => state.auth)


  const handleChangeName = ({target}) => setName(target.value);
  const handleChangeEmail = ({target}) => setEmail(target.value);
  const handleChangePassword = ({target}) => setPassword(target.value);
  const handleChangeConfirmPassword = ({target}) => setConfirmPassword(target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password don\'t match')
      return
  }

  const body = {
      name,
      email,
      password
  }

  dispatch(fetchSignUp(body))
}

useEffect(() => {
  if (isSubmit) {
      navigate('/auth/sign-up-success')

      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
  }
}, [isSubmit])

  return (
    <FormWrap>
      <form className="form-signup">
        <div className="mb-5">
          <FormField
            // label={texts[lang].formSignUp.username.label}
            name="name"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="mb-5">
          <FormField
            // label={texts[lang].formSignUp.email.label}
            name="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-5">
          <FormField
            // label={texts[lang].formSignUp.password.label}
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="mb-5">
          <FormField
            // label={texts[lang].formSignUp.confirmPassword.label}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <p className="form__footer">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </form>
    </FormWrap>
  );
}

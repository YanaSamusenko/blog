import { useSelector } from 'react-redux';
import {EmailConfirm} from '../components/EmailConfirm.jsx';


export function SignUpConfirm() {
  const userEmail = useSelector((state) => state.auth.email);
  return (
    <>
    <h1>Registration Confirmation</h1>
      <EmailConfirm email={userEmail} />
    </>
  );
}

import { forwardRef, useState } from 'react';
import '../styles/formField.scss';

import hidePassword from '../assets/eye-password-hide.svg'
import showPassword from '../assets/eye-password-show.svg'


export const FormField = forwardRef((props, ref) => {
const [isPassword, setIsPassword] = useState(false);

const renderLabel = () => {
  if (!props.label) return null

  return (
    <label className="form-label" htmlFor={props.name}>
      {props.label}
    </label>
  );
}

const togglePassword = () => {
  setIsPassword(!isPassword)
}
  
const renderFormField = () => {
  if (props.type === 'textarea') {
    return (
      <textarea
        ref={ref}
        className="form-control"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
      />
    );
}

const inputType = props.type === 'password' && isPassword ? 'text' : props.type
return <input 
ref={ref}
className="form-control"
type={inputType}
value={props.value}
onChange={props.onChange}
name={props.name}
id={props.name}
/>

}


  return (
    <>
     {renderLabel()}
            <div style={{ position: 'relative', width: '100%' }}>
                {renderFormField()}
                {props.type === 'password' && (
                    <img
                        src={isPassword ? showPassword : hidePassword}
                        alt="eye"
                        onClick={togglePassword}
                        style={{
                            position: 'absolute',
                            width: '18px',
                            height: '18px',
                            right: '12px',
                            top: '58%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                )}
            </div>
    </>
  );
}
);

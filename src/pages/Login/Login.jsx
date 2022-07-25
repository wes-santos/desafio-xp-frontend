import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import './style.css';
import xpLogo from '../../shared/images/xp_logo_home.png';

export default function Login() {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [isEmailValid, isPasswordValid]);

  const validateEmail = ({ target: { value } }) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmailValue(value);
    if (value.match(regExp)) {
      return setIsEmailValid(true);
    }

    return setIsEmailValid(false);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setEmailValue(userEmail);
      validateEmail({ target: { value: userEmail } });
    }
  }, []);

  const validatePassword = ({ target: { value } }) => {
    if (value.length >= 6) {
      return setIsPasswordValid(true);
    }
    return setIsPasswordValid(false);
  };

  const handleLogin = () => {
    setIsButtonEnabled(false);
    // eslint-disable-next-line no-undef
    localStorage.setItem('userEmail', emailValue);
  };

  return (
    <C.Form>
      <img src={xpLogo} alt="logo xp" />
      <C.Label htmlFor="emailInput">
        <p>E-mail</p>
        <input id="emailInput" type="email" onChange={validateEmail} value={emailValue} />
      </C.Label>
      <C.Label htmlFor="passwordInput" style={{ marginBottom: '50px' }}>
        <p>Senha</p>
        <input id="passwordInput" type="password" onChange={validatePassword} />
      </C.Label>
      <Link to="/home" onClick={handleLogin}>
        <C.Button type="button" disabled={!isButtonEnabled}>Acessar</C.Button>
      </Link>
    </C.Form>
  );
}

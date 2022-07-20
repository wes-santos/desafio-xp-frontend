import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import './style.css';
import xpLogo from '../../shared/images/xp_logo_home.png';

export default function Login() {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [isEmailValid, isPasswordValid]);

  const validatePassword = ({ target: { value } }) => {
    if (value.length >= 6) {
      return setIsPasswordValid(true);
    }
    return setIsPasswordValid(false);
  };

  const validateEmail = ({ target: { value } }) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(regExp)) {
      return setIsEmailValid(true);
    }
    return setIsEmailValid(false);
  };

  return (
    <C.Form>
      <img src={xpLogo} alt="logo xp" />
      <C.Label htmlFor="emailInput">
        <p>E-mail</p>
        <input id="emailInput" type="email" onChange={validateEmail} />
      </C.Label>
      <C.Label htmlFor="passwordInput">
        <p>Senha</p>
        <input id="passwordInput" type="password" onChange={validatePassword} />
      </C.Label>
      <Link to="/home">
        <C.Button type="button" disabled={!isButtonEnabled}>Acessar</C.Button>
      </Link>
    </C.Form>
  );
}

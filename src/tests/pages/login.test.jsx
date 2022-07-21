/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../helpers/renderWithRouterAndRedux';

describe('Verifica se', () => {
  it('Inputs de email e senha existem', () => {
    renderWithRouterAndRedux(<App />);
    const emailInputEl = screen.getByRole('textbox');
    const passwordInputEl = screen.getByLabelText('Senha');

    expect(emailInputEl).toBeInTheDocument();
    expect(passwordInputEl).toBeInTheDocument();
  });

  it('Logo da XP está presente', () => {
    renderWithRouterAndRedux(<App />);

    const imgEl = screen.getByAltText('logo xp');

    expect(imgEl).toBeInTheDocument();
  });

  it('Botão de acessar está desabilitado inicialmente', () => {
    renderWithRouterAndRedux(<App />);
    const buttonEl = screen.getByRole('button', { name: 'Acessar' });

    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toBeDisabled();
  });

  it('Botão de acessar é habilitado ao colocar um e-mail e senha válidos', () => {
    renderWithRouterAndRedux(<App />);
    const emailInputEl = screen.getByRole('textbox');
    const passwordInputEl = screen.getByLabelText('Senha');
    const buttonEl = screen.getByRole('button', { name: 'Acessar' });

    userEvent.type(emailInputEl, 'email@email.com');
    expect(emailInputEl.value).toBe('email@email.com');
    userEvent.type(passwordInputEl, '12345');
    expect(passwordInputEl.value).toBe('12345');
    expect(buttonEl).toBeDisabled();

    userEvent.clear(emailInputEl);
    userEvent.clear(passwordInputEl);

    userEvent.type(emailInputEl, 'email@.com');
    expect(emailInputEl.value).toBe('email@.com');
    userEvent.type(passwordInputEl, '123456');
    expect(passwordInputEl.value).toBe('123456');
    expect(buttonEl).toBeDisabled();

    userEvent.clear(emailInputEl);
    userEvent.clear(passwordInputEl);

    userEvent.type(emailInputEl, 'email@email.com');
    expect(emailInputEl.value).toBe('email@email.com');
    userEvent.type(passwordInputEl, '123456');
    expect(passwordInputEl.value).toBe('123456');
    expect(buttonEl).toBeEnabled();
  });

  it('Ao clicar no botão de acessar, é feito um redirecionamento para a página inicial', () => {
    renderWithRouterAndRedux(<App />);
    const emailInputEl = screen.getByRole('textbox');
    const passwordInputEl = screen.getByLabelText('Senha');
    const buttonEl = screen.getByRole('button', { name: 'Acessar' });

    userEvent.type(emailInputEl, 'email@email.com');
    expect(buttonEl).toBeDisabled();

    userEvent.type(passwordInputEl, '123456');
    expect(buttonEl).not.toBeDisabled();

    userEvent.click(buttonEl);

    expect(screen.getByText('Página inicial')).toBeInTheDocument();
    expect(screen.getByText('Seja bem-vindo(a)!')).toBeInTheDocument();
  });
});

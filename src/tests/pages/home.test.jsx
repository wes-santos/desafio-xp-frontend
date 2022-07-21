/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../helpers/renderWithRouterAndRedux';

describe('Verifica se', () => {
  it('Os elementos da página estão presentes', () => {
    const { container } = renderWithRouterAndRedux(<App />, '/home');

    const h2El = screen.getByRole('heading', { level: 2 });

    expect(h2El).toBeInTheDocument();
    expect(h2El.innerHTML).toBe('Seja bem-vindo(a)!');

    const pEl = screen.getByText('Que tal escolher um atalho logo abaixo para começar a usar o aplicativo?');
    expect(pEl).toBeInTheDocument();

    const h3Els = screen.getAllByRole('heading', { level: 3 });
    const homeIconEl = container.querySelector("[data-icon='house']");
    const assetsIconEl = container.querySelector("[data-icon='dollar-sign']");
    const depositIconEl = container.querySelector("[data-icon='money-bill-transfer']");
    const exitIconEl = container.querySelector("[data-icon='tent-arrow-turn-left']");

    expect(h3Els.length).toEqual(4);
    expect(h3Els[0].innerHTML).toBe('Página inicial');
    expect(h3Els[1].innerHTML).toBe('Ações');
    expect(h3Els[2].innerHTML).toBe('Depósito');
    expect(h3Els[3].innerHTML).toBe('Sair');
    expect(homeIconEl).toBeInTheDocument();
    expect(assetsIconEl).toBeInTheDocument();
    expect(depositIconEl).toBeInTheDocument();
    expect(exitIconEl).toBeInTheDocument();
  });

  it('Ao clicar no card de ações, é feito o redirecionamento para a página de ações', () => {
    renderWithRouterAndRedux(<App />, '/home');

    const h3El = screen.getByRole('heading', { level: 3, name: 'Ações' });

    userEvent.click(h3El);

    const h2El = screen.getByRole('heading', { level: 2, name: 'Minhas ações' });

    expect(h2El).toBeInTheDocument();
    expect(h2El.innerHTML).toBe('Minhas ações');
  });

  it('Ao clicar no card de depósito, é feito o redirecionamento para a página de depósito', () => {
    renderWithRouterAndRedux(<App />, '/home');

    const h3El = screen.getByRole('heading', { level: 3, name: 'Depósito' });
    userEvent.click(h3El);

    const depositButtonEl = screen.getByRole('button', { name: 'Depósito' });
    const withdrawButtonEl = screen.getByRole('button', { name: 'Retirada' });
    const inputEl = screen.getByPlaceholderText('Informe o Valor');
    expect(depositButtonEl).toBeInTheDocument();
    expect(depositButtonEl.innerHTML).toBe('Depósito');

    expect(depositButtonEl).toBeInTheDocument();
    expect(withdrawButtonEl.innerHTML).toBe('Retirada');

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('placeholder', 'Informe o Valor');
  });

  it('Ao clicar no card de sair, é feito o redirecionamento para a página de login', () => {
    renderWithRouterAndRedux(<App />, '/home');

    const h3El = screen.getByRole('heading', { level: 3, name: 'Sair' });

    userEvent.click(h3El);

    const emailInputEl = screen.getByLabelText('E-mail');
    const passwordInputEl = screen.getByLabelText('Senha');
    const buttonEl = screen.getByRole('button', { name: 'Acessar' });

    expect(emailInputEl).toBeInTheDocument();
    expect(passwordInputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});

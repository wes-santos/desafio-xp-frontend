/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../utils/renderWithRouterAndRedux';

describe('Verifica se', () => {
  it('Os elementos estão disponíveis na tela', () => {
    renderWithRouterAndRedux(<App />, '/conta');
    const h2El = screen.getByRole('heading', { level: 2, name: 'Valor disponível' });
    const buttonsEls = screen.getAllByRole('button');
    const inputEl = screen.getByPlaceholderText('Informe o Valor');

    expect(h2El).toBeInTheDocument();
    expect(buttonsEls[1].innerHTML).toBe('Depósito');
    expect(buttonsEls[2].innerHTML).toBe('Retirada');
    expect(buttonsEls[3].innerHTML).toBe('Voltar');
    expect(buttonsEls[4].innerHTML).toBe('Confirmar');
    expect(inputEl).toBeInTheDocument();
  });

  it('Ao clicar no botão de voltar, é feito um redirecionamento para a página inicial', () => {
    renderWithRouterAndRedux(<App />, '/conta');
    const buttonEl = screen.getByRole('button', { name: 'Voltar' });

    userEvent.click(buttonEl);

    const h2El = screen.getByRole('heading', { level: 2, name: 'Seja bem-vindo(a)!' });
    expect(h2El).toBeInTheDocument();
  });

  it('É possível realizar um depósito na conta', () => {
    const { store } = renderWithRouterAndRedux(<App />, '/conta');
    const inputEl = screen.getByPlaceholderText('Informe o Valor');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const depositButtonEl = screen.getByRole('button', { name: 'Depósito' });
    const userBalance = screen.getByTestId('user-balance');
    const stateUserBalance = store.getState().user.balance;

    expect(depositButtonEl).toHaveClass('yellow');
    userEvent.type(inputEl, '10');
    expect(inputEl).toHaveValue(10);
    expect(userBalance.innerHTML).toBe(`R$ ${stateUserBalance}`);
    userEvent.click(confirmButtonEl);

    expect(userBalance.innerHTML).toBe(`R$ ${stateUserBalance + 10}`);
  });

  it('É possível retirar dinheiro da conta', () => {
    const { store } = renderWithRouterAndRedux(<App />, '/conta');
    const inputEl = screen.getByPlaceholderText('Informe o Valor');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const depositButtonEl = screen.getByRole('button', { name: 'Depósito' });
    const withdrawButtonEl = screen.getByRole('button', { name: 'Retirada' });
    const userBalance = screen.getByTestId('user-balance');
    const stateUserBalance = store.getState().user.balance;

    expect(depositButtonEl).toHaveClass('yellow');
    expect(withdrawButtonEl).toHaveClass('light-grey');
    expect(userBalance.innerHTML).toBe(`R$ ${stateUserBalance}`);

    userEvent.click(withdrawButtonEl);

    expect(withdrawButtonEl).toHaveClass('yellow');
    expect(depositButtonEl).toHaveClass('light-grey');

    userEvent.type(inputEl, '10');
    expect(inputEl).toHaveValue(10);
    userEvent.click(confirmButtonEl);

    expect(userBalance.innerHTML).toBe(`R$ ${stateUserBalance - 10}`);
  });

  it('Não é possível retirar mais dinheiro do que o disponível na conta', () => {
    const { store } = renderWithRouterAndRedux(<App />, '/conta');
    const inputEl = screen.getByPlaceholderText('Informe o Valor');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const depositButtonEl = screen.getByRole('button', { name: 'Depósito' });
    const withdrawButtonEl = screen.getByRole('button', { name: 'Retirada' });
    const userBalance = screen.getByTestId('user-balance');
    const stateUserBalance = store.getState().user.balance;

    userEvent.click(withdrawButtonEl);

    expect(withdrawButtonEl).toHaveClass('yellow');
    expect(depositButtonEl).toHaveClass('light-grey');

    userEvent.type(inputEl, ((parseFloat(stateUserBalance, 10) + 10).toFixed(2)).toString());
    expect(inputEl).toHaveValue(Number((parseFloat(stateUserBalance, 10) + 10).toFixed(2)));
    userEvent.click(confirmButtonEl);

    const modalTextEl = screen.getByText('Você não tem dinheiro suficiente para realizar a transação :(');

    expect(userBalance.innerHTML).toBe(`R$ ${stateUserBalance}`);
    expect(modalTextEl).toBeInTheDocument();
  });

  it('É necessário digitar um valor para realizar a ação', () => {
    renderWithRouterAndRedux(<App />, '/conta');
    const inputEl = screen.getByPlaceholderText('Informe o Valor');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });

    userEvent.click(confirmButtonEl);

    expect(inputEl).toHaveAttribute('placeholder', 'Você precisa digitar um valor');
    expect(inputEl.focus).toBeTruthy();
  });

  it('Os botões de depósito e retirada alternam as classes de maneira correta', () => {
    renderWithRouterAndRedux(<App />, '/conta');

    const depositButtonEl = screen.getByRole('button', { name: 'Depósito' });
    const withdrawButtonEl = screen.getByRole('button', { name: 'Retirada' });

    expect(depositButtonEl).toHaveClass('yellow');
    expect(withdrawButtonEl).toHaveClass('light-grey');

    userEvent.click(withdrawButtonEl);

    expect(withdrawButtonEl).toHaveClass('yellow');
    expect(depositButtonEl).toHaveClass('light-grey');

    userEvent.click(depositButtonEl);

    expect(depositButtonEl).toHaveClass('yellow');
    expect(withdrawButtonEl).toHaveClass('light-grey');
  });
});

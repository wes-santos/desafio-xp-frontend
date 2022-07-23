/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from '../../utils/renderWithRouterAndRedux';
import App from '../../App';
import initialState from '../mockData';

describe('Verifica se', () => {
  it('Os elementos esperados são exibidos na tela', () => {
    renderWithRouterAndRedux(<App />, '/negociar', initialState);

    const sellButtonEl = screen.getByRole('button', { name: 'Vender' });

    userEvent.click(sellButtonEl);

    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });

    userEvent.click(confirmButtonEl);

    const messageEl = screen.getByText('Você não tem ações suficientes para realizar a transação :(');
    const depositButtonEl = screen.getByRole('button', { name: 'Fazer depósito' });
    const backButtonEl = screen.getAllByRole('button', { name: 'Voltar' });

    expect(messageEl).toBeInTheDocument();
    expect(depositButtonEl).toBeInTheDocument();
    expect(backButtonEl[0]).toBeInTheDocument();
    expect(backButtonEl[0].innerHTML).toBe('Voltar');
  });

  it('Botão de fazer depósito redireciona para a página correta', () => {
    renderWithRouterAndRedux(<App />, '/negociar', initialState);

    const sellButtonEl = screen.getByRole('button', { name: 'Vender' });

    userEvent.click(sellButtonEl);

    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });

    userEvent.click(confirmButtonEl);

    const depositButtonEl = screen.getByRole('button', { name: 'Fazer depósito' });

    userEvent.click(depositButtonEl);

    expect(screen.getByRole('button', { name: 'Depósito' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retirada' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Informe o Valor')).toBeInTheDocument();
  });

  it('Botão de voltar elimina o modal da tela', () => {
    renderWithRouterAndRedux(<App />, '/negociar', initialState);

    const sellButtonEl = screen.getByRole('button', { name: 'Vender' });

    userEvent.click(sellButtonEl);

    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });

    userEvent.click(confirmButtonEl);

    const messageEl = screen.getByText('Você não tem ações suficientes para realizar a transação :(');

    expect(messageEl).toBeInTheDocument();

    const backButtonEl = screen.getAllByRole('button', { name: 'Voltar' });

    userEvent.click(backButtonEl[0]);

    expect(messageEl).not.toBeInTheDocument();
  });
});

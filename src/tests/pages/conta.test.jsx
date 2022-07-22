/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../helpers/renderWithRouterAndRedux';

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
});

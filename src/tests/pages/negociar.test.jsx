/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../helpers/renderWithRouterAndRedux';

describe('Verifica se', () => {
  it('Os elementos estão presentes na tela', () => {
    renderWithRouterAndRedux(<App />, '/negociar');

    const h2El = screen.getByRole('heading', { level: 2, name: 'Comprar/Vender Ação' });
    const h3El = screen.getByRole('heading', { level: 3 });
    const tableEl = screen.getByRole('table');
    const tableRowEl = screen.getByRole('row');
    const buttonsEls = screen.getAllByRole('button');
    const qtyInputEl = screen.getByText('Quantidade');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const totalInputEl = screen.getByLabelText('Valor estimado');

    expect(h2El).toBeInTheDocument();
    expect(h3El).toBeInTheDocument();
    expect(h3El.innerHTML).toContain('Valor disponível:');
    expect(tableEl).toBeInTheDocument();
    expect(tableRowEl).toBeInTheDocument();
    expect(buttonsEls[1].innerHTML).toBe('Comprar');
    expect(buttonsEls[2].innerHTML).toBe('Vender');
    expect(buttonsEls[5].innerHTML).toBe('Voltar');
    expect(buttonsEls[6].innerHTML).toBe('Confirmar');
    expect(qtyInputEl).toBeInTheDocument();
    expect(priceInputEl).toBeInTheDocument();
    expect(totalInputEl).toBeInTheDocument();
  });

  it('Ao clicar no botão de voltar, é feito um redirecionamento para página de ações', () => {
    renderWithRouterAndRedux(<App />, '/negociar');

    const buttonEl = screen.getByRole('button', { name: 'Voltar' });

    userEvent.click(buttonEl);

    const h2Els = screen.getAllByRole('heading', { level: 2 });

    expect(h2Els[0].innerHTML).toBe('Minhas ações');
    expect(h2Els[1].innerHTML).toBe('Disponíveis para investir');
  });
});

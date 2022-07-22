/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../helpers/renderWithRouterAndRedux';

describe('Verifica se', () => {
  it('Títulos são renderizados corretamente', () => {
    renderWithRouterAndRedux(<App />, '/investimentos/acoes');
    const h2Els = screen.getAllByRole('heading', { level: 2 });

    expect(h2Els[0].innerHTML).toBe('Minhas ações');
    expect(h2Els[1].innerHTML).toBe('Disponíveis para investir');
  });

  it('Ações disponíveis são exibidas na tela', () => {
    renderWithRouterAndRedux(<App />, '/investimentos/acoes');

    const tableEls = screen.getAllByRole('table');
    const tableRowsEls = screen.getAllByRole('row');

    expect(tableEls[1]).toBeInTheDocument();
    expect(tableRowsEls[0]).toBeInTheDocument();
  });
});

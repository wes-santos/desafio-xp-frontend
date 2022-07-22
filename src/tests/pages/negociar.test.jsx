/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../utils/renderWithRouterAndRedux';

describe('Verifica se', () => {
  it('Os elementos estão presentes na tela', () => {
    renderWithRouterAndRedux(<App />, '/negociar');

    const h2El = screen.getByRole('heading', { level: 2, name: 'Comprar/Vender Ação' });
    const h3El = screen.getByRole('heading', { level: 3 });
    const tableEl = screen.getByRole('table');
    const tableRowEl = screen.getByRole('row');
    const buttonsEls = screen.getAllByRole('button');
    const qtyInputEl = screen.getByTestId('quantity-input');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const totalInputEl = screen.getByLabelText('Valor estimado');
    const priceEl = screen.getByTestId('asset-price');

    expect(h2El).toBeInTheDocument();
    expect(h3El).toBeInTheDocument();
    expect(h3El.innerHTML).toContain('Valor disponível:');
    expect(tableEl).toBeInTheDocument();
    expect(tableRowEl).toBeInTheDocument();
    expect(buttonsEls[2].innerHTML).toBe('Comprar');
    expect(buttonsEls[3].innerHTML).toBe('Vender');
    expect(buttonsEls[6].innerHTML).toBe('Voltar');
    expect(buttonsEls[7].innerHTML).toBe('Confirmar');
    expect(qtyInputEl).toBeInTheDocument();
    expect(priceInputEl).toBeInTheDocument();
    expect(totalInputEl).toBeInTheDocument();

    const price = priceEl.innerHTML.replace(',', '.').split(' ')[1];

    expect(priceInputEl).toHaveValue(Number(price));
    expect(totalInputEl).toHaveValue(Number(price));
  });

  it('Não é possível alterar o preço de compra ou o valor estimado', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const totalInputEl = screen.getByLabelText('Valor estimado');

    expect(priceInputEl).toHaveAttribute('readonly');
    expect(totalInputEl).toHaveAttribute('readonly');
  });

  it('Ao clicar no botão de voltar, é feito um redirecionamento para página de ações', () => {
    renderWithRouterAndRedux(<App />, '/negociar');

    const buttonEl = screen.getByRole('button', { name: 'Voltar' });

    userEvent.click(buttonEl);

    const h2Els = screen.getAllByRole('heading', { level: 2 });

    expect(h2Els[0].innerHTML).toBe('Minhas ações');
    expect(h2Els[1].innerHTML).toBe('Disponíveis para investir');
  });

  it('Botões de comprar e vender alternam classes como esperado', () => {
    renderWithRouterAndRedux(<App />, '/negociar');

    const buyButtonEl = screen.getByRole('button', { name: 'Comprar' });
    const sellButtonEl = screen.getByRole('button', { name: 'Vender' });

    expect(buyButtonEl).toHaveClass('yellow');
    expect(sellButtonEl).toHaveClass('light-grey');

    userEvent.click(sellButtonEl);

    expect(sellButtonEl).toHaveClass('yellow');
    expect(buyButtonEl).toHaveClass('light-grey');

    userEvent.click(buyButtonEl);

    expect(buyButtonEl).toHaveClass('yellow');
    expect(sellButtonEl).toHaveClass('light-grey');
  });

  it('Botões de alterar a quantidade funcionam conforme o esperado', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const addButtonEl = screen.getByRole('button', { name: '+' });
    const removeButtonEl = screen.getByRole('button', { name: '-' });
    const quantityInputEl = screen.getByTestId('quantity-input');

    expect(addButtonEl).toBeInTheDocument();
    expect(removeButtonEl).toBeInTheDocument();
    expect(quantityInputEl).toBeInTheDocument();
    expect(quantityInputEl).toHaveValue(1);

    userEvent.click(addButtonEl);

    expect(quantityInputEl).toHaveValue(2);

    userEvent.click(removeButtonEl);

    expect(quantityInputEl).toHaveValue(1);

    userEvent.click(removeButtonEl);

    expect(quantityInputEl).toHaveValue(1);
  });

  it('Valor estimado é atualizado conforme a quantidade é alterada', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const quantityInputEl = screen.getByTestId('quantity-input');
    const totalInputEl = screen.getByLabelText('Valor estimado');
    const priceEl = screen.getByTestId('asset-price');

    const price = Number(priceEl.innerHTML.replace(',', '.').split(' ')[1]);

    userEvent.type(quantityInputEl, '2');

    expect(totalInputEl).toHaveValue(price * 12);
  });

  it('É possível comprar uma ação caso o dinheiro em conta seja suficiente', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const quantityInputEl = screen.getByTestId('quantity-input');
    const totalInputEl = screen.getByLabelText('Valor estimado');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const priceEl = screen.getByTestId('asset-price');
    const userBalanceEl = screen.getByTestId('user-balance');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const assetQuantityEl = screen.getByTestId('asset-quantity');

    const price = Number(priceEl.innerHTML.replace(',', '.').split(' ')[1]);
    const userBalance = Number(userBalanceEl.innerHTML.replace(',', '.'));

    expect(Number(assetQuantityEl.innerHTML)).toEqual(0);

    userEvent.type(quantityInputEl, '2');

    expect(totalInputEl).toHaveValue(price * 12);
    expect(userBalanceEl).toBeInTheDocument();

    userEvent.click(confirmButtonEl);

    expect(userBalanceEl.innerHTML).toEqual((userBalance - (price * 12)).toString().replace('.', ','));
    expect(Number(assetQuantityEl.innerHTML)).toEqual(12);
    expect(totalInputEl).toHaveValue(price);
    expect(quantityInputEl).toHaveValue(1);
    expect(priceInputEl).toHaveValue(price);
  });

  it('É possível vender uma ação com sucesso', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const quantityInputEl = screen.getByTestId('quantity-input');
    const totalInputEl = screen.getByLabelText('Valor estimado');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const priceEl = screen.getByTestId('asset-price');
    const userBalanceEl = screen.getByTestId('user-balance');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const assetQuantityEl = screen.getByTestId('asset-quantity');
    const sellButton = screen.getByRole('button', { name: 'Vender' });

    const price = Number(priceEl.innerHTML.replace(',', '.').split(' ')[1]);
    const userBalance = Number(userBalanceEl.innerHTML.replace(',', '.'));

    expect(Number(assetQuantityEl.innerHTML)).toEqual(12);

    userEvent.type(quantityInputEl, '2');

    expect(totalInputEl).toHaveValue(price * 12);
    expect(userBalanceEl).toBeInTheDocument();

    userEvent.click(sellButton);

    userEvent.click(confirmButtonEl);

    expect(userBalanceEl.innerHTML).toEqual((userBalance + (price * 12)).toString().replace('.', ','));
    expect(Number(assetQuantityEl.innerHTML)).toEqual(0);
    expect(totalInputEl).toHaveValue(price);
    expect(quantityInputEl).toHaveValue(1);
    expect(priceInputEl).toHaveValue(price);
  });

  it('Não é possível comprar uma ação quando o dinheiro em conta é insuficiente', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const quantityInputEl = screen.getByTestId('quantity-input');
    const totalInputEl = screen.getByLabelText('Valor estimado');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const priceEl = screen.getByTestId('asset-price');
    const userBalanceEl = screen.getByTestId('user-balance');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const assetQuantityEl = screen.getByTestId('asset-quantity');

    const price = Number(priceEl.innerHTML.replace(',', '.').split(' ')[1]);
    const userBalance = Number(userBalanceEl.innerHTML.replace(',', '.'));

    expect(Number(assetQuantityEl.innerHTML)).toEqual(0);

    userEvent.type(quantityInputEl, '1000');

    expect(totalInputEl).toHaveValue(price * 11000);
    expect(userBalanceEl).toBeInTheDocument();

    userEvent.click(confirmButtonEl);

    const modalTextEl = screen.getByText('Você não tem dinheiro suficiente para realizar a transação :(');

    expect(userBalanceEl.innerHTML).toEqual(userBalance.toString().replace('.', ','));
    expect(Number(assetQuantityEl.innerHTML)).toEqual(0);
    expect(totalInputEl).toHaveValue(price * 11000);
    expect(quantityInputEl).toHaveValue(11000);
    expect(priceInputEl).toHaveValue(price);
    expect(modalTextEl).toBeInTheDocument();
  });

  it('Não é possível vender uma ação se não a tiver comprado ainda', () => {
    renderWithRouterAndRedux(<App />, '/negociar');
    const quantityInputEl = screen.getByTestId('quantity-input');
    const totalInputEl = screen.getByLabelText('Valor estimado');
    const priceInputEl = screen.getByLabelText('Preço de compra');
    const priceEl = screen.getByTestId('asset-price');
    const userBalanceEl = screen.getByTestId('user-balance');
    const confirmButtonEl = screen.getByRole('button', { name: 'Confirmar' });
    const assetQuantityEl = screen.getByTestId('asset-quantity');
    const sellButton = screen.getByRole('button', { name: 'Vender' });

    const price = Number(priceEl.innerHTML.replace(',', '.').split(' ')[1]);
    const userBalance = Number(userBalanceEl.innerHTML.replace(',', '.'));

    expect(Number(assetQuantityEl.innerHTML)).toEqual(0);

    expect(totalInputEl).toHaveValue(price);
    expect(userBalanceEl).toBeInTheDocument();

    userEvent.click(sellButton);

    userEvent.click(confirmButtonEl);

    const modalTextEl = screen.getByText('Você não tem ações suficientes para realizar a transação :(');

    expect(userBalanceEl.innerHTML).toEqual(userBalance.toString().replace('.', ','));
    expect(Number(assetQuantityEl.innerHTML)).toEqual(0);
    expect(totalInputEl).toHaveValue(price);
    expect(quantityInputEl).toHaveValue(1);
    expect(priceInputEl).toHaveValue(price);
    expect(modalTextEl).toBeInTheDocument();
  });
});

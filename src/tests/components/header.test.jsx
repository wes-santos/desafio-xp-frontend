/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from '../../utils/renderWithRouterAndRedux';
import Header from '../../components/header/Header';

describe('Verifica se', () => {
  it('Os elementos esperados estão presentes', () => {
    renderWithRouterAndRedux(<Header />);
    const imgsEls = screen.getAllByRole('img');

    const imgsElsObj = {
      xpLogo: imgsEls[0],
      menuIcon: imgsEls[1],
    };

    expect(imgsElsObj.xpLogo).toHaveAttribute('alt', 'xp logo');
    expect(imgsElsObj.menuIcon).toHaveAttribute('alt', 'menu icon');

    userEvent.click(imgsElsObj.menuIcon);

    let listEls = screen.getAllByRole('listitem');

    let listElsObj = {
      paginaInicial: listEls[0],
      investimentos: listEls[1],
      depositar: listEls[2],
      sair: listEls[3],
    };

    expect(listElsObj.paginaInicial.innerHTML).toContain('Página Inicial');
    expect(listElsObj.investimentos.innerHTML).toContain('Investimentos');
    expect(listElsObj.depositar.innerHTML).toContain('Depositar');
    expect(listElsObj.sair.innerHTML).toContain('Sair');

    userEvent.click(listElsObj.investimentos.firstChild);

    listEls = screen.getAllByRole('listitem');

    listElsObj = {
      paginaInicial: listEls[0],
      investimentos: listEls[1],
      depositar: listEls[2],
      sair: listEls[3],
      voltar: listEls[4],
      acoes: listEls[5],
    };

    expect(listElsObj.voltar.innerHTML).toContain('Voltar');
    expect(listElsObj.acoes.innerHTML).toContain('Ações');
  });

  it('O redirecionamento para ações é feito corretamente', () => {
    renderWithRouterAndRedux(<App />, '/home');
    const imgsEls = screen.getAllByRole('img');

    const imgsElsObj = {
      xpLogo: imgsEls[0],
      menuIcon: imgsEls[1],
    };

    userEvent.click(imgsElsObj.menuIcon);

    let listEls = screen.getAllByRole('listitem');

    userEvent.click(listEls[1].firstChild);

    listEls = screen.getAllByRole('listitem');

    // Click on link specifically
    userEvent.click(listEls[5].firstChild.firstChild);

    const investmentsTitleEl = screen.getByRole('heading', { level: 2, name: 'Minhas ações' });

    expect(investmentsTitleEl).toBeInTheDocument();
    expect(investmentsTitleEl.innerHTML).toBe('Minhas ações');

    userEvent.click(screen.getByTestId('home-logo-button'));
    expect(screen.getByRole('heading', { level: 2, name: 'Seja bem-vindo(a)!' })).toBeInTheDocument();
  });

  it('O redirecionamento para depositar é feito corretamente', () => {
    renderWithRouterAndRedux(<App />, '/home');
    const imgsEls = screen.getAllByRole('img');

    const imgsElsObj = {
      xpLogo: imgsEls[0],
      menuIcon: imgsEls[1],
    };

    userEvent.click(imgsElsObj.menuIcon);

    const listEls = screen.getAllByRole('listitem');

    userEvent.click(listEls[2].firstChild.firstChild);

    const depositButtonEl = screen.getByRole('button', { name: 'Depósito' });
    const withdrawButtonEl = screen.getByRole('button', { name: 'Retirada' });
    const inputEl = screen.getByPlaceholderText('Informe o Valor');

    expect(depositButtonEl).toBeInTheDocument();
    expect(depositButtonEl.innerHTML).toBe('Depósito');
    expect(withdrawButtonEl).toBeInTheDocument();
    expect(withdrawButtonEl.innerHTML).toBe('Retirada');
    expect(inputEl).toBeInTheDocument();

    userEvent.click(screen.getByTestId('home-logo-button'));
    expect(screen.getByRole('heading', { level: 2, name: 'Seja bem-vindo(a)!' })).toBeInTheDocument();
  });

  it('O redirecionamento para página de login é feito corretamente', () => {
    renderWithRouterAndRedux(<App />, '/home');
    const imgsEls = screen.getAllByRole('img');

    const imgsElsObj = {
      xpLogo: imgsEls[0],
      menuIcon: imgsEls[1],
    };

    userEvent.click(imgsElsObj.menuIcon);

    const listEls = screen.getAllByRole('listitem');

    userEvent.click(listEls[3].firstChild.firstChild);

    const emailInputEl = screen.getByRole('textbox');
    const passwordInputEl = screen.getByLabelText('Senha');
    const loginButtonEl = screen.getByRole('button', { name: 'Acessar' });

    expect(emailInputEl).toBeInTheDocument();
    expect(passwordInputEl).toBeInTheDocument();
    expect(loginButtonEl).toBeInTheDocument();
  });

  it('O redirecionamento para a página inicial é feito corretamente', () => {
    renderWithRouterAndRedux(<App />, '/conta');
    const imgsEls = screen.getAllByRole('img');

    const imgsElsObj = {
      xpLogo: imgsEls[0],
      menuIcon: imgsEls[1],
    };

    userEvent.click(imgsElsObj.menuIcon);

    const listEls = screen.getAllByRole('listitem');

    userEvent.click(listEls[0].firstChild.firstChild);

    const h2El = screen.getByRole('heading', { level: 2, name: 'Seja bem-vindo(a)!' });

    expect(h2El).toBeInTheDocument();
    expect(h2El.innerHTML).toBe('Seja bem-vindo(a)!');
  });
});

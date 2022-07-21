/* eslint-disable react/prop-types */
import React from 'react';
import * as C from './style';
import Header from '../../../components/header/Header';
import Table from '../../../components/Table/Table';
import { minhasAcoes, todasAcoes } from '../../../data';

export default function Acoes() {
  return (
    <C.Wrapper>
      {Header()}
      <C.Container>
        <div>
          <section>
            <h2>Minhas ações</h2>
            <Table acoes={minhasAcoes} />
          </section>
          <section>
            <h2>Disponíveis para investir</h2>
            <Table acoes={todasAcoes} />
          </section>
        </div>
      </C.Container>
    </C.Wrapper>
  );
}

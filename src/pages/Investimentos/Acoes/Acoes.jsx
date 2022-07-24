/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as C from './style';
import Header from '../../../components/header/Header';
import Table from '../../../components/Table/Table';
import { fetchAssetsThunk } from '../../../redux/actions';

export default function Acoes() {
  const { allAssets, userAssets } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAssetsThunk());
  }, []);

  return (
    <C.Wrapper>
      {Header()}
      <C.Container>
        <div>
          <section>
            <h2>Minhas ações</h2>
            <Table acoes={userAssets} />
          </section>
          <section>
            <h2>Disponíveis para investir</h2>
            <Table acoes={allAssets} />
          </section>
        </div>
      </C.Container>
    </C.Wrapper>
  );
}

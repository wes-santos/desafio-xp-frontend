export const subMoney = (state, payload) => {
  const { balance } = state;
  if (balance > 0) {
    const newBalance = (parseFloat(balance, 10) - parseFloat(payload, 10)).toFixed(2);

    if (newBalance < 0) {
      throw new Error('Você não tem dinheiro suficiente para realizar a transação :(');
    }

    return newBalance;
  }

  return balance;
};

export const sumMoney = (state, payload) => {
  const { balance } = state;
  const newBalance = (parseFloat(balance, 10) + parseFloat(payload, 10)).toFixed(2);
  return newBalance;
};

export const buyAsset = (state, payload) => {
  const fakeState = [...state.userAssets];
  const actualAsset = fakeState
    .find((e) => e.codAtivo === payload.codAtivo);

  const isAssetNew = !(actualAsset || false);

  if (isAssetNew) {
    return [...fakeState, payload];
  }

  const indexOfActualAsset = fakeState.indexOf(actualAsset);

  const updatedState = fakeState.map((asset, index) => {
    if (index === indexOfActualAsset) {
      return ({
        ...asset,
        qtdeAtivo: parseInt(asset.qtdeAtivo, 10) + parseInt(payload.qtdeAtivo, 10),
      });
    }
    return asset;
  });

  return updatedState;
};

export const sellAsset = (state, payload) => {
  const fakeState = [...state.userAssets];
  const actualAsset = fakeState
    .find((e) => e.codAtivo === payload.codAtivo);

  const indexOfActualAsset = fakeState.indexOf(actualAsset);

  const updatedState = fakeState.map((asset, index) => {
    if (index === indexOfActualAsset) {
      const isTransactionValid = (
        parseInt(asset.qtdeAtivo, 10) - parseInt(payload.qtdeAtivo, 10)
      ) >= 0;

      if (!isTransactionValid) {
        throw new Error('Você não tem ações suficientes para realizar essa transação :(');
      }

      return ({
        ...asset,
        qtdeAtivo: parseInt(asset.qtdeAtivo, 10) - parseInt(payload.qtdeAtivo, 10),
      });
    }

    return asset;
  });

  return updatedState;
};

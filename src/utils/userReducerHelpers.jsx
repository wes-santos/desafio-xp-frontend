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
    .find((e) => e.CodAtivo === payload.CodAtivo);

  const isAssetNew = !(actualAsset || false);

  if (isAssetNew) {
    return [...fakeState, payload];
  }

  const indexOfActualAsset = fakeState.indexOf(actualAsset);

  const updatedState = fakeState.map((asset, index) => {
    if (index === indexOfActualAsset) {
      return ({
        ...asset,
        QtdeAtivo: asset.QtdeAtivo + payload.QtdeAtivo,
      });
    }
    return asset;
  });

  return updatedState;
};

export const sellAsset = (state, payload) => {
  const fakeState = [...state.userAssets];
  const actualAsset = fakeState
    .find((e) => e.CodAtivo === payload.CodAtivo);

  const indexOfActualAsset = fakeState.indexOf(actualAsset);

  const updatedState = fakeState.map((asset, index) => {
    if (index === indexOfActualAsset) {
      const isTransactionValid = asset.QtdeAtivo - payload.QtdeAtivo >= 0;

      if (!isTransactionValid) {
        throw new Error('Você não tem ações suficientes para realizar essa transação :(');
      }

      return ({
        ...asset,
        QtdeAtivo: asset.QtdeAtivo - payload.QtdeAtivo,
      });
    }
    return asset;
  });

  return updatedState;
};

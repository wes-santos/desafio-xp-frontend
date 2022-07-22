export const addMoney = (value) => ({
  type: 'ADD_MONEY',
  payload: value,
});

export const subtractMoney = (value) => ({
  type: 'SUBTRACT_MONEY',
  payload: value,
});

export const saveClickedAsset = (value) => ({
  type: 'SAVE_CLICKED_ASSET',
  payload: value,
});

export const buyAsset = (asset, QtdeAtivo) => ({
  type: 'BUY_ASSET',
  payload: {
    ...asset,
    QtdeAtivo,
  },
});

export const sellAsset = (asset, QtdeAtivo) => ({
  type: 'SELL_ASSET',
  payload: {
    ...asset,
    QtdeAtivo,
  },
});

export const sumMoney = (value) => ({
  type: 'SUM_MONEY',
  payload: value,
});

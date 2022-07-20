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

export const buyAsset = (codAtivo, qtdeAtivo) => ({
  type: 'BUY_ASSET',
  payload: {
    codAtivo,
    qtdeAtivo,
  },
});

export const sellAsset = (codAtivo, qtdeAtivo) => ({
  type: 'SELL_ASSET',
  payload: {
    codAtivo,
    qtdeAtivo,
  },
});

export const sumMoney = (value) => ({
  type: 'SUM_MONEY',
  payload: value,
});

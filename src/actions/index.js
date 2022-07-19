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

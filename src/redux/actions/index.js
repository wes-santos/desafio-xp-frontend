import api from '../../utils/api';

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

export const buyAsset = (asset, qtdeAtivo) => ({
  type: 'BUY_ASSET',
  payload: {
    ...asset,
    qtdeAtivo,
  },
});

export const sellAsset = (asset, qtdeAtivo) => ({
  type: 'SELL_ASSET',
  payload: {
    ...asset,
    qtdeAtivo,
  },
});

export const sumMoney = (value) => ({
  type: 'SUM_MONEY',
  payload: value,
});

export const requestAssets = () => ({
  type: 'REQUEST_ASSETS',
});

export const saveFetchedAssets = (assets) => ({
  type: 'SAVE_ALL_ASSETS',
  payload: assets,
});

export const fetchApiError = () => ({
  type: 'FETCH_API_ERROR',
});

export const fetchAssetsThunk = () => async (dispatch) => {
  try {
    dispatch(requestAssets);
    const response = await api.get('/acoes');
    dispatch(saveFetchedAssets(response.data));
  } catch (error) {
    dispatch(fetchApiError);
  }
};

import { minhasAcoes } from '../../data';
import {
  subMoney,
  sumMoney,
  buyAsset,
  sellAsset,
} from '../../utils/userReducerHelpers';

const INITIAL_STATE = {
  balance: 999.99,
  clickedAsset: 'PETR4',
  isFetching: false,
  allAssets: [{
    codAtivo: 'PETR4',
    valor: 27.96,
    imagem: 'https://i.imgur.com/3rXRnXm.jpg',
    subtitulo: 'Petrobras Pn N2',
    qtdeAtivo: 0,
  }],
  userAssets: minhasAcoes,
  fetchApiError: false,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MONEY': return {
      ...state,
      balance: (parseFloat(state.balance, 10) + parseFloat(action.payload, 10)).toFixed(2),
    };
    case 'SUBTRACT_MONEY': return {
      ...state,
      balance: subMoney(state, action.payload),
    };
    case 'SUM_MONEY': return {
      ...state,
      balance: sumMoney(state, action.payload),
    };
    case 'SAVE_CLICKED_ASSET': return { ...state, clickedAsset: action.payload };
    case 'BUY_ASSET': return {
      ...state,
      userAssets: buyAsset(state, action.payload),
    };
    case 'SELL_ASSET': return {
      ...state,
      userAssets: sellAsset(state, action.payload),
    };
    case 'REQUEST_ASSETS': return { ...state, isFetching: true };
    case 'SAVE_ALL_ASSETS': return { ...state, allAssets: action.payload, isFetching: false };
    case 'FETCH_API_ERROR': return { ...state, fetchApiError: true };
    default: return state;
  }
};

export default userReducer;

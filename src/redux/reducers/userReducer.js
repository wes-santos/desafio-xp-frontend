import { todasAcoes, minhasAcoes } from '../../data';
import {
  subMoney,
  sumMoney,
  buyAsset,
  sellAsset,
} from '../../utils/userReducerHelpers';

const INITIAL_STATE = {
  balance: 999.99,
  clickedAsset: 'PETR4',
  allAssets: todasAcoes,
  userAssets: minhasAcoes,
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
    default: return state;
  }
};

export default userReducer;

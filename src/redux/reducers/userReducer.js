import { todasAcoes, minhasAcoes } from '../../data';

const INITIAL_STATE = {
  balance: 999.99,
  clickedAsset: 'PETR4',
  allAssets: todasAcoes,
  userAssets: minhasAcoes,
};

function subMoney(state, payload) {
  const { balance } = state;
  if (balance > 0) {
    const newBalance = (parseFloat(balance, 10) - parseFloat(payload, 10)).toFixed(2);

    if (newBalance < 0) {
      throw new Error('Você não tem dinheiro suficiente para realizar a transação :(');
    }

    return newBalance;
  }

  return balance;
}

function sumMoney(state, payload) {
  const { balance } = state;
  const newBalance = (parseFloat(balance, 10) + parseFloat(payload, 10)).toFixed(2);
  return newBalance;
}

function buyAsset(state, payload) {
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
}

function sellAsset(state, payload) {
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
        codAtivo: asset.codAtivo,
        qtdeAtivo: asset.qtdeAtivo - payload.qtdeAtivo,
      });
    }
    return asset;
  });

  return updatedState;
}

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

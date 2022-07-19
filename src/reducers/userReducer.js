const INITIAL_STATE = {
  balance: 999.99,
  clickedAsset: 'PETR4',
  myAssets: [{
    codAtivo: '',
    qtdeAtivo: 0,
  }],
};

function subMoney(state, payload) {
  const { balance } = state;
  if (balance > 0) {
    const newBalance = (parseFloat(balance) - parseFloat(payload)).toFixed(2);

    if (newBalance < 0) {
      return 0;
    }

    return newBalance;
  }

  return balance;
}

function buyAsset(state, payload) {
  const fakeState = [...state.myAssets];
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
        qtdeAtivo: asset.qtdeAtivo + payload.qtdeAtivo,
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
      balance: (parseFloat(state.balance) + parseFloat(action.payload)).toFixed(2),
    };
    case 'SUBTRACT_MONEY': return {
      ...state,
      balance: subMoney(state, action.payload),
    };
    case 'SAVE_CLICKED_ASSET': return { ...state, clickedAsset: action.payload };
    case 'BUY_ASSET': return {
      ...state,
      myAssets: buyAsset(state, action.payload),
    };
    default: return state;
  }
};

export default userReducer;

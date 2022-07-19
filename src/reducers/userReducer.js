const INITIAL_STATE = {
  balance: 999.99,
  clickedAsset: 'PETR4',
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
    default: return state;
  }
};

export default userReducer;

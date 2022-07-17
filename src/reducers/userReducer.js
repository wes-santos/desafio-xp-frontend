const INITIAL_STATE = {
  balance: 999.99,
  clickedAsset: 'PETR4',
};

// eslint-disable-next-line default-param-last
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MONEY': return {
      ...state,
      balance: (parseFloat(state.balance) + parseFloat(action.payload)).toFixed(2),
    };
    case 'SUBTRACT_MONEY': return {
      ...state,
      balance: (parseFloat(state.balance) - parseFloat(action.payload)).toFixed(2),
    };
    case 'SAVE_ASSET': return { ...state, clickedAsset: action.payload };
    default: return state;
  }
};

export default userReducer;

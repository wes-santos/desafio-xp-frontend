/* eslint-disable default-param-last */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
// import Store from '../redux/store';
import rootReducer from '../redux/reducers';

const getStore = (initialState) => {
  if (!initialState) return createStore(rootReducer, applyMiddleware(thunk));
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

const renderWithRouterAndRedux = (
  component,
  route = '/',
  initialState,
) => {
  const history = createMemoryHistory();
  const store = getStore(initialState);
  return ({
    history,
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter history={history} initialEntries={[route]}>
          {component}
        </MemoryRouter>
      </Provider>,
    ),
  });
};

export default renderWithRouterAndRedux;

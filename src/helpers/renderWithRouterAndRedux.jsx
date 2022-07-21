import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from '../redux/store';

const renderWithRouterAndRedux = (
  component,
  route = '/',
) => {
  const history = createMemoryHistory();
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

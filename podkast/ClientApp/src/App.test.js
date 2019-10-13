import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {

  const storeFake = (state) => ({
    default: () => { },
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({ ...state })
  });

  const store = storeFake({});

  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>, div);
});

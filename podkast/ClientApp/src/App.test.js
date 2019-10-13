import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { initialSearchState } from './store/Search';
import { initialAudioState } from './store/AudioPlayer';

it('renders without crashing', () => {

  const storeFake = (state) => ({
    default: () => { },
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({ ...state })
  });

  const store = storeFake({
      search: initialSearchState,
      audioPlayer: initialAudioState
  });

  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>, div);
});

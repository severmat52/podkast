const requestSearchPodcastsType = 'REQUEST_SEARCH_PODCASTS';
const receiveSearchPodcastsType = 'RECEIVE_SEARCH_PODCASTS';
const initialState = { podcasts: [], isLoading: false };

export const actionCreators = {
  requestSearchPodcasts: searchString => async (dispatch, getState) => {    
    if (searchString === getState().searchString) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestSearchPodcastsType, searchString });

    const url = `api/Search/${startDateIndex}`;
    const response = await fetch(url);
    const podcasts = await response.json();

    dispatch({ type: receiveSearchPodcastsType, searchString, podcasts });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestSearchPodcastsType) {
    return {
      ...state,
      searchString: action.searchString,
      isLoading: true
    };
  }

  if (action.type === receiveWeatherForecastsType) {
    return {
      ...state,
      searchString: action.searchString,
      podcasts: action.podcasts,
      isLoading: false
    };
  }

  return state;
};

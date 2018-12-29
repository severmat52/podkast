const requestSearchPodcastsType = 'REQUEST_SEARCH_PODCASTS';
const receiveSearchPodcastsType = 'RECEIVE_SEARCH_PODCASTS';
const initialState = { podcasts: [], searching: false };

export const actionCreators = {
  requestSearchPodcasts: searchString => async (dispatch) => {    

    dispatch({ type: requestSearchPodcastsType, searchString });

    const url = `api/Search/${searchString}`;
    const response = await fetch(url);
    const podcasts = (await response.json()).results;

    dispatch({ type: receiveSearchPodcastsType, searchString, podcasts });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestSearchPodcastsType) {
    return {
      ...state,
      searching: true
    };
  }

  if (action.type === receiveSearchPodcastsType) {
    return {
      ...state,
      podcasts: action.podcasts,
      searching: false
    };
  }

  return state;
};

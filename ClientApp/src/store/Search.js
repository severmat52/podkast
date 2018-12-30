const requestSearchPodcastsType = 'REQUEST_SEARCH_PODCASTS';
const receiveSearchPodcastsType = 'RECEIVE_SEARCH_PODCASTS';
const requestPodcastFeedType = 'REQUEST_GET_FEED';
const receivePodcastFeedType = 'RECEIVE_PODCAST_FEED';
const initialState = {
  podcasts: [],
  feed: [],
  searching: false,
  loadingFeed: false
};

export const actionCreators = {

  requestSearchPodcasts: searchString => async (dispatch) => {
    dispatch({
      type: requestSearchPodcastsType,
      searchString
    });
    const url = `api/Search/${searchString}`;
    const response = await fetch(url);
    const podcasts = (await response.json()).results;
    dispatch({
      type: receiveSearchPodcastsType,
      searchString,
      podcasts
    });
  },

  requestGetFeed: podcastId => async (dispatch) => {
    dispatch({
      type: requestPodcastFeedType
    });
    const url = `api/Search/Feed/${podcastId}`;
    const response = await fetch(url);
    const feed = (await response.json());
    dispatch({
      type: receivePodcastFeedType,
      feed
    });
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

  if (action.type === requestPodcastFeedType) {
    return {
      ...state,
      loadingFeed: true
    }
  }
  if (action.type === receivePodcastFeedType) {
    return {
      ...state,
      loadingFeed: false,
      feed: action.feed
    }
  }

  return state;
};
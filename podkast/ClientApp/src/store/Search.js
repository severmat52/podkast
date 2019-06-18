const requestSearchPodcastsType = 'REQUEST_SEARCH_PODCASTS';
const receiveSearchPodcastsType = 'RECEIVE_SEARCH_PODCASTS';
const requestPodcastFeedType = 'REQUEST_GET_FEED';
const receivePodcastFeedType = 'RECEIVE_PODCAST_FEED';
const playPodcastType = 'PLAY_PODCAST_TYPE';

const initialState = {
  podcasts: [],
  feed: [],
  searching: false,
  loadingFeed: false,
  selectedPodcast: undefined,
  selectedPodcastEpisode: undefined
};

export const actionCreators = {

  playPodcast: podcast => (dispatch) => {
    dispatch({
      type: playPodcastType,
      podcast
    });
  },

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

  requestGetFeed: (podcast) => async (dispatch) => {
    dispatch({
      type: requestPodcastFeedType,
      podcast
    });
    const url = `api/Search/Feed/${podcast.collectionId}`;
    const response = await fetch(url);
    const feed = (await response.json());
    dispatch({
      type: receivePodcastFeedType,
      feed
    });
  },
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
      loadingFeed: true,
      selectedPodcast: action.podcast
    }
  }
  if (action.type === receivePodcastFeedType) {
    return {
      ...state,
      loadingFeed: false,
      feed: action.feed
    }
  }
  if(action.type === playPodcastType){
    return {
      ...state,
      selectedPodcastEpisode: action.podcast
    }
  }

  return state;
};
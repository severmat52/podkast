const requestSearchPodcastsType = 'REQUEST_SEARCH_PODCASTS';
const receiveSearchPodcastsType = 'RECEIVE_SEARCH_PODCASTS';
const requestPodcastFeedType = 'REQUEST_GET_FEED';
const receivePodcastFeedType = 'RECEIVE_PODCAST_FEED';
const selectPlayEpisodeType = 'SELECT_PLAY_EPISODE_TYPE';

const initialState = {
  podcasts: [],
  feed: [],
  searching: false,
  loadingFeed: false,
  selectedPodcast: undefined,
  selectedEpisode: undefined
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

  selectedPlayEpisode: (episode) => (dispatch) => {
    dispatch({type: selectPlayEpisodeType, episode})
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

  if(action.type === selectPlayEpisodeType){
    return {
      ...state,
      selectedEpisode: action.episode
    };
  }

  return state;
};
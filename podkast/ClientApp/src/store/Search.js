export const requestSearchPodcastsType = 'REQUEST_SEARCH_PODCASTS';
export const receiveSearchPodcastsType = 'RECEIVE_SEARCH_PODCASTS';
export const errorSearchPodcastsType = 'ERROR_SEARCH_PODCASTS';
export const requestPodcastFeedType = 'REQUEST_GET_FEED';
export const receivePodcastFeedType = 'RECEIVE_PODCAST_FEED';
export const selectPlayEpisodeType = 'SELECT_PLAY_EPISODE_TYPE';

export const initialSearchState = {
  podcasts: [],
  feed: [],
  searching: false,
  loadingFeed: false,
  selectedPodcast: undefined,
  selectedEpisode: undefined,
  searchError: undefined
};

export const actionCreators = {

  requestSearchPodcasts: searchString => async (dispatch) => {

    dispatch({
      type: requestSearchPodcastsType,
      searchString
    });

    try{
      const url = `api/Search/${searchString}`;
      const response = await fetch(url);
      const podcasts = (await response.json()).results;
      dispatch({
        type: receiveSearchPodcastsType,
        searchString,
        podcasts
      });
    }
    catch(error){
      dispatch({
        type: errorSearchPodcastsType,
        error: error.message});
    }

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
    dispatch({
      type: selectPlayEpisodeType,
      episode
    })
  }
};

export const reducer = (state, action) => {
  state = state || initialSearchState;

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

  if (action.type === selectPlayEpisodeType) {
    return {
      ...state,
      selectedEpisode: action.episode
    };
  }

  if (action.type === errorSearchPodcastsType) {
    return {
      ...state,
      searchError: action.error
    };
  }

  return state;
};
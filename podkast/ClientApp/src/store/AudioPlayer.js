const requestCollapseType = 'REQUEST_COLLAPSE_TYPE';
const requestPlayType = 'REQUEST_PLAY_TYPE';
const requestPauseType = 'REQUEST_PAUSE_TYPE';
const playEpisodeType = 'PLAY_EPISODE_TYPE';

const initialState = {
  collapsed: false,
  playing: false,
  episode: undefined,
  audio: new Audio('https://rss.art19.com/episodes/902742a8-53d8-4125-b64d-139595e6bfe3.mp3')
};

export const actionCreators = {
    collapseAudioPlayer: () => (dispatch) => {
        dispatch({ type: requestCollapseType });
    },

    pauseAudioPlayer: (audio) => (dispatch) => {
      audio.pause();
      dispatch({type: requestPauseType});
    },

    playAudioPlayer: (audio) => (dispatch) => {
      audio.play();
      dispatch({type: requestPlayType});
    }, 

    seekTo: (audio, seconds) => (dispatch) => {
      if(audio){
        audio.currentTime = seconds;
      }
    },

    playEpisode: (episode) => (dispatch) => {
      dispatch({type: playEpisodeType,
                episode});
    }

    
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestCollapseType) {
    return {
      ...state,
      collapsed: !state.collapsed
    };
  }

  if(action.type === requestPlayType){
    return{
      ...state,
      playing: true
    };
  }

  if(action.type === requestPauseType){
    return{
      ...state,
      playing: false
    }
  }

  if(action.type === playEpisodeType){
    return{
      ...state,
      episode: action.episode,
      audio: new Audio(action.episode)
    };
  }

  return state;
};
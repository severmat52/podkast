const requestCollapseType = 'REQUEST_COLLAPSE_TYPE';
const requestPlayType = 'REQUEST_PLAY_TYPE';
const requestPauseType = 'REQUEST_PAUSE_TYPE';
const playEpisodeType = 'PLAY_EPISODE_TYPE';
const updateAudioType= 'UPDATE_AUDIO_TYPE';

export const initialAudioState = {
  collapsed: false,
  playing: false,
  episode: undefined,
  audio: null
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

    playEpisode: (episode, action) => (dispatch) => {
      dispatch({type: playEpisodeType,
                episode, action});
    },

    updateAudio: () => (dispatch) => {
      dispatch({type: updateAudioType});
    }

};

export const reducer = (state, action) => {
  state = state || initialAudioState;

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
    let audio = new Audio(action.episode);
    addAudioEventHandlers(audio, action.action);
    return{
      ...state,
      episode: action.episode,
      audio
    };
  }

  if(action.type === updateAudioType){
    return {
      ...state
    };
  }

  return state;
};

function addAudioEventHandlers(audio, action){
  if(audio){
    if(audio){
      audio.onloadedmetadata = () => action();
      audio.onloadeddata = () => action();
      audio.oncanplay = () => action();
      audio.ontimeupdate = () => action();
  }
  }
}
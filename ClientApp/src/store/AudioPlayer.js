const requestCollapseType = 'REQUEST_COLLAPSE_TYPE';

const initialState = {
  collapsed: false
};

export const actionCreators = {
    collapseAudioPlayer: () => async (dispatch) => {
        dispatch({ type: requestCollapseType });
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

  return state;
};
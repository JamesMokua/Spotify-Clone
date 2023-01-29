import { reducerCases } from "./Constraints";

export const initialState = {
  token: null,
  refreshToken: null,
  playlists: [],
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN : {
      return {
        ...state,
        token: action.token,
      }
    }
    case reducerCases.SET_REFRESH_TOKEN : {
      return {
        ...state,
        refreshToken: action.refreshToken,
      }
    }
    case reducerCases.SET_PLAYLISTS : {
      return {
        ...state,
        playlists: action.playlists,
      }
    }
    case reducerCases.SET_USER : {
      return {
        ...state,
        userInfo: action.userInfo,
      }
    }
    default:
      return state;
  }
};

export default reducer;

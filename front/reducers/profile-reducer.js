const defaultState = {};

const profileReducer = (state=defaultState, action) => {
  switch(action.type) {
    // case 'GET_PROFILE': {
    //   return Object.assign({}, state, action.data)
    //   break;
    // }
    case 'USER_LOGIN':
    return {...state, ...action.profileData}
    default: return state
  }
};

export default profileReducer;

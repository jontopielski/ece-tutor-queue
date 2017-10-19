const initialUserState = {
  lastUpdated: 0,
  info: {
    name: ''
    userId: '',
    activityState: '',
    accountType: '',
    ticketHistory: [],
    accountCreated: 0
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default :
      return state
  }
}


const initialState = {
  isAuthed: false,
  isFetching: false,
  error: '',
  authedId: ''
}

// Users
function users(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        isAuthed: true,
        authedId: userId,
      }
    case 'UNAUTH_USER':
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case 'FETCHING_USER':
      return {
        ...state,
        isFetching: true,
      }
    case 'FETCHING_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case 'FETCHING_USER_SUCCESS':
      return action.user === null
        ? {
          ...state,
          error: '',
          isFetching: false,
        }
        : {
          ...state,
          error: '',
          isFetching: false,
          [action.userId]: user(state[action.userId], action),
        }
    default:
      return state
  }
}

// Tickets


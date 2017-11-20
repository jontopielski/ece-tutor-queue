import auth, { logout, saveUser } from 'helpers/auth'
import { formatUserInfo } from 'helpers/utils'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

export function authUser (uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

export function unauthUser () {
  return {
    type: UNAUTH_USER,
  }
}

function fetchingUser () {
  return {
    type: FETCHING_USER,
  }
}

export function removeFetchingUser () {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

function fetchingUserFailure () {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.',
  }
}

export function fetchingUserSuccess (uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

export function fetchAndHandleAuthedUser () {
  return function (dispatch) {
    dispatch(fetchingUser())
    return auth().then(({user, credential}) => {
      const userData = user.providerData[0]
      const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
      dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()))
    })
      .then(({user}) => saveUser(user))
      .then((user) => dispatch(authUser(user.uid)))
      .catch(() => {
        dispatch(fetchingUserFailure)
      })
  }
}

export function logoutAndUnauth () {
  return function (dispatch) {
    logout()
    dispatch(unauthUser())
  }
}

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    activityState: 'OFFLINE',
    accountType: 'STUDENT',
    ticketHistory: [],
    accountCreated: 0,
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default:
      return state
  }
}

const initialState = {
  isAuthed: false,
  isFetching: true,
  error: '',
  authedId: '',
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action),
        }
    default :
      return state
  }
}

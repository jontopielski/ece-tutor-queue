export const ASSIGN_TICKET = 'counter/ASSIGN_TICKET'

export const STUDENT = 'STUDENT'
export const TUTOR = 'TUTOR'
export const ADMIN = 'ADMIN'
export const ONLINE = 'ONLINE'

// TODO:
/*
  If person is logged in, there is user variable
  else, user variable is undefined
*/
const initialState = {
    user: {
      user_id: 'a10650321',
      user_name: 'NotoriousNapper',
      status: ONLINE,
      name: 'Jesse Ren',
      details: {
        type: STUDENT,
        t_id: null// If it has a ticket, then it is bool "hasTicket"
      }
    },
    tutor: { user_id: 'b111', user_name: 'Sammy', status: ONLINE,
      name: 'Sammy Ta', details: { type: TUTOR
     }
    },
    userList: [
      { user_id: 'a10650321', user_name: 'NotoriousNapper', status: ONLINE,
        name: 'Jesse Ren', details: { type: STUDENT, t_id: null// If it has a ticket, then it is bool "hasTicket"
       }} ,
      { user_id: 'a1111111', user_name: 'Pyre', status: ONLINE,
        name: 'Jon Top', details: { type: STUDENT, t_id: null// If it has a ticket, then it is bool "hasTicket"
        } }
    ],
    tutorList: [
      { user_id: 'tutorID123', user_name: 'NotoriousNapper', status: ONLINE,
        name: 'Jesse Ren', details: { type: TUTOR, }},

      { user_id: 'b111', user_name: 'Sammy', status: ONLINE,
        name: 'Sammy Ta', details: { type: TUTOR
       }}
      ,
      { user_id: 'b333', user_name: 'Sammy_Version2', status: ONLINE,
        name: 'Sammy Ta Ta', details: { type: TUTOR
      }}
    ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_TICKET:
      let newUser = {
        ...state.user,
        details: { ...state.details, t_id: action.t_id }
      }
      return {
        ...state,
        user: { ...newUser }
      }
    default:
      return state
  }
}

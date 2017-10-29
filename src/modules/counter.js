export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const TICKET_UPDATE = 'counter/TICKET_UPDATE'
export const TICKET_RESOLVE = 'counter/TICKET_RESOLVE'

const initialState = {
  count: 1,
  tickets: [
    {
      t_id: "1",
      status: "OPEN",
      tutor_id:"",
      student_id:"",
      student_name:"Jesse Ren",
      class:"",
      time_start: 0,
      time_end: 0
    },
    {
      t_id: "2",
      status: "OPEN",
      tutor_id:"",
      student_id:"",
      student_name:"John Topielski",
      class:"",
      time_start: 0,
      time_end: 0
    }
  ],
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case TICKET_RESOLVE:
      return {
        ...state,
        tickets: state.tickets.filter(({t_id})=> t_id !== action.selected_ticket)
      }

    case TICKET_UPDATE:
      return {
        ...state,
        tickets: state.tickets.map(item => item.t_id === action.selected_ticket ?
            // transform one with matching id, change field
            { ...item, status: "IN_PROGRESS" } :
            // otherwise return original
            item
      )
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const resolveTicket = (id) => {
  return dispatch => {
    dispatch({
      type: TICKET_RESOLVE,
      selected_ticket: id
    })
  }
}

export const updateTicket = (id) => {
  return dispatch => {
    dispatch({
      type: TICKET_UPDATE,
      selected_ticket: id
    })
  }
}

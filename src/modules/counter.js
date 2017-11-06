export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const TICKET_UPDATE = 'counter/TICKET_UPDATE'
export const TICKET_RESOLVE = 'counter/TICKET_RESOLVE'
export const TICKET_RESERVE = 'counter/TICKET_RESERVE'
export const GET_QUEUE_LENGTH = 'counter/GET_QUEUE_LENGTH'

const initialState = {
  user: {
    type: "student",
    user_name: "NotoriousNapper",
    name: "Jesse Ren"
  },
  count: 2,
  archive: [],
  tickets: [
    {
      t_id: "1",
      status: "OPEN",
      tutor_id:"",
      student_id:"",
      student_name:"Jesse Ren",
      class:"",
      note:"",
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
      note:"",
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
      let ticket = state.tickets.find( item => item.t_id === action.selected_ticket );
      let status = "CLOSED";
      let dateTime = new Date();
      return {
        ...state,
        tickets: state.tickets.filter(({t_id})=> t_id !== action.selected_ticket),
        archive: [ ...state.archive, { ...ticket, status, time_end : dateTime} ]
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

    case TICKET_RESERVE:
      let randTicket = {
        t_id: "" + (state.count + 1),
        status: "OPEN",
        tutor_id:"",
        student_id:"",
        student_name: action.data.name,
        class: action.data.class,
        note: action.data.note,
        time_start: 0,
        time_end: 0
      }

      return {
        ...state,
        count: state.count + 1,
        tickets: [...state.tickets, randTicket]
      }

    case GET_QUEUE_LENGTH:
      return {
        ...state,
        length: state.tickets.length
      }

    default:
      return state
  }
}


/* Actions & Thunks */
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

export const reserveTicket = (ticket) => {
  return (dispatch, getState) => {
    // get modal from modal store
    const modal = getState()
        .modal;
    dispatch({
      type: TICKET_RESERVE,
      ticket: ticket,
      data: {
        name: modal.name,
        class: modal.class,
        note: modal.note
      }
    })
  }
}

export const getQueueLength = () => {
  return dispatch => {
    dispatch({
      type: GET_QUEUE_LENGTH
    })
  }
}

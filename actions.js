// User Login
{
  type: AUTH_USER,
  userId,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user.',
}

{
  type: FETCHING_USER_SUCCESS,
  userId,
  user,
  timestamp,
}

// Tickets
{
  type: FETCHING_TICKETS,
}

{
  type: FETCHING_TICKETS_ERROR,
  error: 'Error fetching tickets',
}

{
  type: FETCHING_TICKETS_SUCCESS,
  tickets,
}


// Queue
{
  type: FETCHING_QUEUE,
}

{
  type: FETCHING_QUEUE_ERROR,
  error: 'Error fetching queue',
}

{
  type: FETCHING_QUEUE_SUCCESS,
  tickets,
}

{
  type: REMOVE_FETCHING,
}


// Queue Listener
{
  type: SETTING_QUEUE_LISTENER,
}

{
  type: SETTING_QUEUE_LISTENER_ERROR,
  error: 'Error setting queue listener.',
}

{
  type: SETTING_QUEUE_LISTENER_SUCCESS,
}

{
  type: ADD_NEW_TICKET_TO_QUEUE,
  ticket,
}

{
  type: RESET_QUEUE,
}


// Firebase Listener
{
  type: ADD_LISTENER,
  listenerId,
}


// Modal
{
  type: OPEN_MODAL,
}

{
  type: CLOSE_MODAL,
}

{
  type: UPDATE_TICKET,
  newTicketInfo,
}
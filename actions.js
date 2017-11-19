// Users
{
  type: AUTH_USER,
  uid,
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
  uid,
  user,
  timestamp,
}


// Tickets
{
  type: FETCHING_TICKETS,
}

{
  type: FETCHING_TICKETS_ERROR,
  error: 'Error fetching Tickets',
}

{
  type: FETCHING_TICKET_SUCCESS,
  ticket,
}

{
  type: REMOVE_FETCHING,
}

{
  type: ADD_TICKET,
  ticket,
}

{
  type: ADD_MULTIPLE_TICKETS,
  tickets,
}


// Feed
{
  type: SETTING_FEED_LISTENER,
}

{
  type: SETTING_FEED_LISTENER_ERROR,
  error: 'Error fetching feed.',
}

{
  type: SETTING_FEED_LISTENER_SUCCESS,
  ticketIds,
}

{
  type: ADD_NEW_TICKET_ID_TO_FEED,
  ticketId,
}

{
  type: RESET_NEW_TICKETS_AVAILABLE,
}


//Listeners
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
  type: UPDATE_TICKET_NAME,
  ticketName,
}

{
  type: UPDATE_TICKET_CLASS,
  class,
}

{
  type: UPDATE_ADDITIONAL_INFO,
  additionalInfo,
}


// usersTickets
{
  type: FETCHING_USERS_TICKETS,
  uid,
}

{
  type: FETCHING_USERS_TICKETS_ERROR,
  error: 'Error fetching Users Ticket Ids',
}

{
  type: FETCHING_USERS_TICKETS_SUCCESS,
  uid,
  ticketIds,
  lastUpdated,
}

{
  type: ADD_SINGLE_USERS_TICKET,
  uid,
  ticketId,
}

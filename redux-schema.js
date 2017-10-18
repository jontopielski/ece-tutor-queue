{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    lastUpdated,
    [studentId]: {
      info: {
        name,
        activityState,
        accountType,
        ticketHistory: [ticketId, ticketId, ticketId],
        accountCreated
      }
    }
  },
  modal: {
    ticket: {
      name,
      class,
      additionalInfo
    },
    isOpen
  },
  // TODO: Decide whether or not to include all tickets from redux state
  tickets: {
    lastUpdated,
    [ticketId]: {
      info: {
        tutorId,
        studentId,
        studentName,
        class,
        additionalInfo,
        timeStart,
        timeEnd,
        status
      }
    }
  },
  queue: {
    isFetching,
    error,
    newTicketsAvailable,
    ticketsToAdd: {
      [ticketId]: {
        info: {
          tutorId,
          studentId,
          studentName,
          class,
          additionalInfo,
          timeStart,
          timeEnd,
          status
        }
      }
    },
    lastUpdated,
    tickets: {
      [ticketId]: {
        info: {
          tutorId,
          studentId,
          studentName,
          class,
          additionalInfo,
          timeStart,
          timeEnd,
          status
        }
      }
    }
  },
  // This will manage the Firebase listener
  listeners: {
    [listenerIds]: true
  }
}
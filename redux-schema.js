{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      info: {
        name,
        uid,
        activityState,
        accountType,
        ticketHistory: [ticketId, ticketId, ticketId],
        accountCreated
      },
      lastUpdated
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
          openTimestamp,
          inProgressTimestamp,
          closedTimestamp,
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
          openTimestamp,
          inProgressTimestamp,
          closedTimestamp,
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

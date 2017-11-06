{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [userId]: {
      info: {
        name,
        userId,
        activityState,
        isTutor,
        ticketHistory: [ticketId, ticketId, ticketId],
        accountCreated
      },
      lastUpdated,
    }
  },
  modal: {
    name,
    class,
    additionalInfo,
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
        isInProgress,
      }
    }
  },
  queue: {
    isFetching,
    error,
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

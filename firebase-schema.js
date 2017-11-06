// users
users: {
  user1: {
    name: 'Jon Topielski',
    uid: 'user1',
    activityState: 'ACTIVE', // ['ACTIVE', 'INACTIVE', 'AWAY', 'RETIRED']
    isTutor: false,
    ticketHistory: {
      'ticket1',
      'ticket12',
      'ticket22',
    }
    accountCreated: 1508024124,
  }
}

//tickets
tickets: {
  ticket1: {
    tutorId: 'tutor1',
    studentId: 'student1',
    studentName: 'Jon Topielski',
    class: 'ECE 35', // May be enum
    additionalInfo: 'Doing HW 4',
    startTimestamp: 1508024124,
    endTimestamp: 1508024555,
    isInProgress: false,
  }
}

//queue
queue: {
  tickets: {
    ticket1: {
      tutorId: 'tutor1',
      studentId: 'student1',
      studentName: 'Jon Topielski',
      class: 'ECE 35', // May be enum
      additionalInfo: 'Doing HW 4',
      startTimestamp: 1508024124,
      endTimestamp: 1508024555,
      isInProgress: false,
    },
    ticket2: {
      …
    }
  }
}

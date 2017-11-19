// users
users: {
  user1: {
    name: 'Jon Topielski',
    uid: 'user1',
    activityState: 'ONLINE', // ['ONLINE' (green), 'BUSY' (red), 'AWAY' (yellow), 'OFFLINE' (grey)]
    accountType: 'TUTOR', // ['STUDENT', 'TUTOR', 'ADMIN']
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
    openTimestamp: 1508024124,
    inProgressTimestamp: 1508024555,
    closedTimestamp: 1508024556,
    status: 'CLOSED', // ['OPEN', 'IN_PROGRESS', 'CLOSED', 'ABANDONED']
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
      openTimestamp: 1508024124,
      inProgressTimestamp: 1508024555,
      closedTimestamp: 1508024556,
      status: 'CLOSED', // ['OPEN', 'IN_PROGRESS', 'CLOSED', 'ABANDONED']
    }
    ticket2: {
      …
    }
  }
}

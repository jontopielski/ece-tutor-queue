// users
users: {
  user1: {
    name: 'Jon Topielski',
    activity_state: 'ACTIVE', // ['ACTIVE', 'INACTIVE', 'AWAY', 'RETIRED']
    account_type: 'TUTOR', // ['STUDENT', 'TUTOR', 'ADMIN']
    ticket_history: {
      'ticket1',
      'ticket12',
      'ticket22',
    }
    account_created: 1508024124,
  }
}

//tickets
tickets: {
  ticket1: {
    tutor_id: 'tutor1',
    student_id: 'student1',
    student_name: 'Jon Topielski',
    class: 'ECE 35', // May be enum
    additional_info: 'Doing HW 4',
    time_start: 1508024124,
    time_end: 1508024555,
    status: 'CLOSED', // ['OPEN', 'IN_PROGRESS', 'CLOSED']
  }
}

//queue
queue: {
  tickets: {
    ticket1: {
      tutor_id: 'tutor1',
      student_id: 'student1',
      student_name: 'Jon Topielski',
      class: 'ECE 35', // May be enum
      additional_info: 'Doing HW 4',
      time_start: 1508024124,
      time_end: 1508024555,
      status: 'CLOSED', // ['OPEN', 'IN_PROGRESS', 'CLOSED']
    },
    ticket2: {
      …
    }
  }
}

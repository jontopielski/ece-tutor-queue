import React, { PureComponent } from 'react';
import "./Ticket.css";

export default class Ticket extends PureComponent {
  constructor(props) {
    super(props);
  }
  render ()
    {
       const { student_name, status, class_num, t_id, time_start, time_end } = this.props.item;
       const { updateTicket, resolveTicket } = this.props.actions;
       const name = (student_name) ? student_name.split(' ') : "Nameless Person".split(' ');
       const first_name = name[0];    // First Name
       const last_name = (name.length <= 1) ? '' : name[1][0]; //First character of last name
       /* Change This to be at container level, if its an
       archived thing */
       let buttons = ( status === "CLOSED" ) ? (<div> </div>) :
            (<div className="Ticket-Item">
             <button className="Ticket-Button" onClick={() => {updateTicket(t_id);}}
                disabled={status === "IN_PROGRESS"}> Select </button>
             <button className="Ticket-Button" onClick={() => {resolveTicket(t_id);}}
            disabled={status === "OPEN"}> Resolve </button>
            </div>);
      let time = ( status === 'CLOSED') ? (<div className="Ticket-Time">
          Time finished: {time_end.toString()}</div>) : (<div></div>);

       return (
         <div className='Ticket'>
           <div className='Ticket-Item'>{first_name + ' ' +  last_name + '.'}</div>
           <div id='status' className={(status === 'CLOSED') ? 'Ticket-Status-Closed' :
                (status === "OPEN" ) ? 'Ticket-Status-Free' : 'Ticket-Status-In-Progress' }
                >{status}</div>
           <div className='Ticket-Item'>{class_num}</div>
           { buttons }
           { time }
         </div>

       );
    }
  }

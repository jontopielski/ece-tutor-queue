import React, { PureComponent } from 'react';
import "./Ticket.css";

export default class Ticket extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
       const { student_name, status, class_num, t_id } = this.props.item;
       const { updateTicket, resolveTicket } = this.props.actions;
       const first_name = student_name.split(" ")[0];    // First Name
       const last_name = student_name.split(" ")[1][0]; //First character of last name
       return (
         <div className="Ticket">
           <div className="Ticket-Item">{first_name + " " +  last_name + "."}</div>
           <div id="status" className={(status === "OPEN") ? "Ticket-Status-Free" : "Ticket-Status-In-Progress" }
                >{status}</div>
           <div className="Ticket-Item">{class_num}</div>
         <button onClick={() => {updateTicket(t_id);}}> Select </button>
         <button onClick={() => {resolveTicket(t_id);}}> Resolve </button>
         </div>
       );
    }
  }

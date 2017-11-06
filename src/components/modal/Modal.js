import React, { PureComponent } from 'react';
import { Input, TextArea } from 'light-form';
// import "./Ticket.css";

export default class Modal extends PureComponent {
  constructor(props) {
    super(props);
  }

  render ()
    {
      return (
      <div className="div">
        <label> Name </label>
        <Input name="modal.name" />
        <br/>
        <label> Class Number </label>
        <Input name="modal.class_num" />
        <br/>
        <label> Notes </label>
        <TextArea name="modal.notes" />
      </div>
    )
    }
  }

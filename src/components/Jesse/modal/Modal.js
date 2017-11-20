import React, { PureComponent } from 'react';
import { Input, TextArea } from 'light-form';
import "./Modal.css";

export default class Modal extends PureComponent {
  constructor(props) {
    super(props);
  }

  render ()
    {
      return (
      <div className="Modal">
         <div className="Modal-Inner">
        <label> Class Number </label>
        <Input name="modal.class_num" />
        <br/>
        <label> Notes </label>
        <TextArea name="modal.notes" />
         </div>
      </div>
    )
    }
  }



        /* Took Out Name Input, session should have this info */
        // <label> Name </label>
        // <Input name="modal.name" />
        // <br/>

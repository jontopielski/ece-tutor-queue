import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  updateTicket,
  resolveTicket
} from '../../modules/counter'

import "./Tutor.css"

const Tutor = props => (
  <div className="Tutor" >
    <h1>ECE Tutor Panel </h1>
    <p className=""> {
      props.tickets.map(function(item){
      return (<div> <li>
        Name: {item.student_name}
        Status: {item.status}
        Class: {item.class}
      </li>
      <button onClick={() => {props.updateTicket(item.t_id);}}> Select </button>
      <button onClick={() => {props.resolveTicket(item.t_id);}}> Resolve </button>
      </div>)

    })} </p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  tickets: state.counter.tickets
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTicket,
  resolveTicket,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutor)

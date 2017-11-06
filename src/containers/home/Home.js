import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  reserveTicket,
  getQueueLength
} from '../../modules/counter'

import CustomerForm from '../../components/modal/Modal'
import Ticket from '../../components/ticket/Ticket'

import "./Home.css"

const Home = props => (
  <div className="Home" >
    <h1>ECE Tutoring Queue</h1>
    <p>Hello <p className="Home-user-name">{props.user_name}</p>
          there are currently </p>
    <p className="Home-queue"> {props.length} People in Line</p>

    <p><button onClick={() => { props.reserveTicket(); props.getQueueLength()}}> Reserve Now </button></p>
    <CustomerForm />
  </div>
)

const mapStateToProps = state => ({
  user_name: state.counter.user.user_name,
  length: state.counter.tickets.length,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  reserveTicket,
  getQueueLength,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

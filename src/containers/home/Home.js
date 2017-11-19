import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  reserveTicket,
  getQueueLength
} from '../../modules/counter'

import CustomerForm from '../../components/modal/Modal'
import Ticket from '../../components/ticket/Ticket'

import "./Home.css"

const Home = props => {
  let welcomeMessage = ( props.user_name !== 'GUEST') ?
      (<p>Hello <p className="Home-user-name">{ props.user_name }</p></p>) :
      (<div> Not Logged In </div>);

  return (
    <div className="Home" >
      <h1>ECE Tutoring Queue</h1>
      { welcomeMessage }
            there are currently
      <p className="Home-queue"> {props.length} People in Line</p>
      Tutor Assigned To You: { props.tutor }
      <CustomerForm />
      <p><button onClick={() => { props.reserveTicket(); props.getQueueLength()}}> Reserve Now </button></p>
    </div>
  )
}
  /* From Session */
  /* From Counter */
const mapStateToProps = state => {
  const tutor_name = state.counter.tickets.filter(
    item => (item.t_id == state.session.user.details.t_id)
  );


  return {
  user_name: (typeof state.session.user.user_name === 'undefined') ? 'Guest' :
    state.session.user.user_name,
  length: state.counter.tickets.length,
  tutor: (tutor_name[0] === undefined || tutor_name == []) ? 'no tutor' : tutor_name[0].tutor_name
}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  reserveTicket,
  getQueueLength,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

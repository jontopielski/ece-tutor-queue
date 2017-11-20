import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  updateTicket,
  resolveTicket
} from '../../modules/counter'

import "./Tutor.css"
import Ticket from '../../components/ticket/Ticket'

const Tutor = props => (
  <div className="Tutor" >
    <h1>ECE Tutor Panel </h1>

    <p className="">
      Current Queue

     {
      props.tickets.map(function(item){
      return ( <Ticket item={item}
              actions={{
                  updateTicket: props.updateTicket.bind(this),
                  resolveTicket: props.resolveTicket.bind(this)
              }} />
            )
    })} </p>

      Finished Queue
    <p className=""> {
      props.archive.map(function(item){
      return ( <Ticket item={item}
              actions={{
                  updateTicket: props.updateTicket.bind(this),
                  resolveTicket: props.resolveTicket.bind(this)
              }} />
            )
    })} </p>
  </div>
)

const mapStateToProps = state => ({
  tickets: state.counter.tickets,
  archive: state.counter.archive
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

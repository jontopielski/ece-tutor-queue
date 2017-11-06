import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  updateTicket,
  resolveTicket,
} from '../../modules/counter'

import './Tutor.css'

class Tutor extends React.Component {
  static propTypes = {
    tickets: PropTypes.object.isRequired,
  }
  render () {
    return (
      <div className='Tutor' >
        <h1>{'ECE Tutor Panel'}</h1>
        <p className=''> {
          this.props.tickets.map(function (item) {
            return (<div> <li>
            Name: {item.student_name}
            Status: {item.status}
            Class: {item.class}
            </li>
            <button onClick={() => { this.props.updateTicket(item.t_id) }}>{'Select'}</button>
            <button onClick={() => { this.props.resolveTicket(item.t_id) }}>{'Resolve'} </button>
            </div>)
          })} </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tickets: state.counter.tickets,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTicket,
  resolveTicket,
  changePage: () => push('/about-us'),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutor)

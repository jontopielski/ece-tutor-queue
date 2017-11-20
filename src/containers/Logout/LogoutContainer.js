import React from 'react'
import PropTypes from 'prop-types'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'
import { connect } from 'react-redux'

class LogoutContainer extends React.Component {
  propTypes: {
    dispatch: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.dispatch(logoutAndUnauth())
  }
  render() {
    return (
      <Logout />
    )
  }
}

export default connect()(LogoutContainer)

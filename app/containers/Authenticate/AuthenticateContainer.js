import React from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'

class AuthenticateContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }
  static propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  handleAuth () {
    this.props.fetchAndHandleAuthedUser()
      .then(() => {
        this.context.router.history.replace('feed')
      })
  }
  render () {
    return (
      <div>
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.props.error}
          onAuth={this.handleAuth}/>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    isFetching: users.isFetching,
    error: users.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer)

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'
import { Navigation } from 'components'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

class MainContainer extends React.Component {
  static propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if (this.props.location.pathname === '/') {
          this.context.router.history.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }
  render () {
    return this.props.isFetching === true
      ? null
      : <div className={container}>
          <Navigation isAuthed={this.props.isAuthed}/>
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  }
}

function mapStateToProps ({users}) {
  return {
    isAuthed: users.isAuthed,
    isFetching: users.isFetching,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

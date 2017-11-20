import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function FacebookAuthButton ({isFetching, onAuth}) {
  return (
    <button className={button} onClick={onAuth}>
      {isFetching === true
        ? 'Loading..'
        : 'Login with Facebook'
      }
    </button>
  )
}

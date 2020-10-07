import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getUsers} from '../../actions/users'

const UserSelectOptions = ({getUsers, user: {users, loading}}) => {

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line
  }, [])

  return (
    !loading && users !== null && users.map(u => <option key={users.id} value={`${u.firstName} ${u.lastName}`}>
      {users.firstName} {users.lastName}
    </option>)
  )
}

UserSelectOptions.propTypes = {
user: PropTypes.object.isRequired,
getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {getUsers})(UserSelectOptions)

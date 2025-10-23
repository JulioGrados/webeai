import { useEffect } from 'react'

import { ListTeachers } from '../../components'
import { getTeachers } from '../../redux/user'
import { useReduxState, useReduxFetch } from '../../hooks/redux'

const UserList = props => {
  const { teachers, loading } = useReduxState('user')
  const fetch = useReduxFetch(getTeachers)
  useEffect(() => {
    if (teachers.length === 0) {
      fetch()
    }
  }, [])

  return <ListTeachers {...props} teachers={teachers} loading={loading} />
}

export default UserList

import { useEffect } from 'react'

import { Slogan } from '../../components'
import { getTeachers } from '../../redux/user'
import { useReduxState, useReduxFetch } from '../../hooks/redux'

const SloganFech = () => {
  const { list } = useReduxState('course')
  const { teachers } = useReduxState('user')

  const fetchTeachers = useReduxFetch(getTeachers)

  useEffect(() => {
    if (teachers.length === 0) {
      fetchTeachers()
    }
  }, [])

  return <Slogan teachers={teachers.length} courses={list.length} />
}

export default SloganFech

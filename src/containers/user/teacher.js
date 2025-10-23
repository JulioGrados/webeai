import { useEffect } from 'react'

import { DetailTeacher } from '../../components'
import { getTeacher } from '../../redux/user'
import { useReduxState, useReduxFetch } from '../../hooks/redux'

const DetailUser = ({ username }) => {
  const { teacher, loading } = useReduxState('user')
  const fetch = useReduxFetch(getTeacher)

  useEffect(() => {
    fetch(username)
  }, [])

  if (loading) {
    return <span>Cargando...</span>
  }
  if (!teacher) {
    return <span>No se encontro el docente</span>
  }
  return <DetailTeacher {...teacher} />
}

export default DetailUser

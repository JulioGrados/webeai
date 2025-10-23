import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCourse } from '../redux/course'

export const useCourse = ({ query = {} }) => {
  const { current, loading, loaded, error } = useSelector(state => state.course)
  const dispatch = useDispatch()

  useEffect(() => {
    if (query.id) {
      dispatch(
        getCourse({
          query
        })
      )
    }
  }, [query.id])

  const course = current

  return {
    course,
    loading,
    loaded,
    error
  }
}

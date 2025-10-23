import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getTestimonies, getTestimoniesCourse } from '../redux/testimony'

export const useTestimonies = ({ courseId, categoryId } = {}) => {
  const { list, listCourse, loading, loaded } = useSelector(
    state => state.testimony
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(
        getTestimonies({
          query: { status: 'Visible' },
          populate: ['linked.ref', 'course.ref']
        })
      )
    }
  }, [])

  useEffect(() => {
    if (loading === false) {
      dispatch(
        getTestimoniesCourse({
          courseId,
          categoryId
        })
      )
    }
  }, [courseId, categoryId])

  const testimonies = list

  return {
    testimonies,
    listCourse,
    loading,
    loaded
  }
}

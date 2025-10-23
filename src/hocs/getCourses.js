import { useEffect } from 'react'
import { payloadToData } from 'utils/functions/course'
import { compareSimilarity } from 'utils/functions/text'

import { getCourses } from '../redux/course'
import { useReduxState, useReduxFetch } from '../hooks/redux'

const ListCourses = ({
  limit = 0,
  category,
  username,
  search,
  slug,
  children,
  label
}) => {
  const { list, loading } = useReduxState('course')
  const fetchCourses = useReduxFetch(getCourses)
  useEffect(() => {
    if (list.length === 0 && limit === 0) {
      fetchCourses({ query: {isHidden: false}, sort: '-published' })
    }
  }, [])

  let courses = list.filter(item => !item.isHidden)

  if (limit > 0 || category || username || label) {
    courses = list.filter(item => !item.isHidden)
    courses = courses
      .filter((item, idx) => {
        const isLimit = limit === 0 || limit > idx
        const isLabel = !label || label === item.category.slug
        const isTeacher =
          !username ||
          item.teachers.find(teacher => teacher.username === username)
        // const isLabel = !label || item.labels.find(item => item.slug === label)
        return isLimit && isTeacher && isLabel
        // && isCategory
      })
      .map(item => payloadToData(item))
  }
  if (search) {
    courses = list
      .map(item => {
        item.similarity = compareSimilarity(search, item.name)
        return item
      })
      .filter(item => item.similarity > 0.5)
      .sort((a, b) => b.similarity - a.similarity)
  }

  let course
  if (slug) {
    course = courses.find(item => item.slug === slug)
  }

  const withoutTeacher = !!username

  return children({ courses, course, loading, withoutTeacher })
}

export default ListCourses

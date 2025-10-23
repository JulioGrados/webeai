import { Courses } from './styles'

import CourseItem from './item'

const ListCourses = ({
  courses,
  loading,
  column,
  withoutTeacher = false,
  isHome,
  isTeacher = false
}) => {
  if (loading) {
    return <span>Cargando...</span>
  }

  const getHome = isHome && true
  
  return (
    <>
      <Courses column={column} getHome={getHome} isTeacher={isTeacher}>
        {courses.map(course => (
          <CourseItem
            showHome={getHome}
            key={course._id}
            {...course}
            withoutTeacher={withoutTeacher}
            isTeacher={isTeacher}
          />
        ))}
      </Courses>
    </>
  )
}

export default ListCourses

import { ListCourses, Search, HeadPage } from '../../components'
import GetCourses from '../../hocs/getCourses'

const ListSearchCourse = ({ search }) => {
  return (
    <GetCourses search={search}>
      {({ courses, loading }) => {
        if (loading) {
          return <span>Cargando</span>
        }
        if (courses.length === 0) {
          return <Search title={search} />
        }
        return <ListCourses courses={courses} />
      }}
    </GetCourses>
  )
}

export default ListSearchCourse

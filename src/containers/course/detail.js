import { DetailCourse, Undefind } from '../../components'
import GetCourses from '../../hocs/getCourses'

const Detail = ({ slug }) => {
  return (
    <GetCourses slug={slug}>
      {({ course, loading }) => {
        if (loading) {
          return <span>Cargando</span>
        }
        if (!course) {
          return <Undefind title={slug} />
        }
        return <DetailCourse {...course} />
      }}
    </GetCourses>
  )
}

export default Detail

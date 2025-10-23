import { ListCourses } from '../../components'
import GetCourses from '../../hocs/getCourses'

const List = props => {
  return (
    <GetCourses {...props}>
      {response => (
        <ListCourses
          {...response}
          isHome={props.limit}
          isTeacher={props.username}
        />
      )}
    </GetCourses>
  )
}

export default List

import { SelectCourse } from '../../components'
import GetCourses from '../../hocs/getCourses'

const SearchCourse = ({ course, onSelect }) => (
  <GetCourses>
    {({ courses }) => {
      const handleSelect = item => {
        onSelect({
          ...item,
          ref: item._id
        })
      }
      const list = courses.map(item => ({
        ...item,
        value: item._id,
        label: item.name
      }))

      let selectedCourse
      if (course) {
        selectedCourse = {
          ...course,
          value: course._id,
          label: course.name
        }
      }

      return (
        <SelectCourse
          courses={list}
          onSelect={handleSelect}
          course={selectedCourse}
        />
      )
    }}
  </GetCourses>
)

export default SearchCourse

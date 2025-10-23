import { TeacherCourses, TeacherArticle, TeacherCoursesTitle } from './styles'
import { ListCourses } from '../../containers'

const CoursesTeacher = ({ username }) => {
  return (
    <TeacherCourses>
      <TeacherArticle>
        <TeacherCoursesTitle>Cursos que enseña</TeacherCoursesTitle>
        <ListCourses username={username} />
      </TeacherArticle>
    </TeacherCourses>
  )
}

export default CoursesTeacher

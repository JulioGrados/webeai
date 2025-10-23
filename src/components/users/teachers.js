import { Teachers } from './styles'

import TeacherItem from './teacherItem'

const ListTeachers = ({ teachers, loading }) => {
  if (loading) {
    return <span>Cargando...</span>
  }
  console.log(teachers)
  return (
    <Teachers>
      {teachers.map(teacher => (
        <TeacherItem key={teacher._id} {...teacher} />
      ))}
    </Teachers>
  )
}

export default ListTeachers

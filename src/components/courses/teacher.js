import {
  SectionCourse,
  SectionTitle,
  CourseItemTeacherContent,
  CourseItemTeacherImg,
  CourseItemTeacherDescription,
  CourseItemTeacherNames,
  CourseItemTeacherText
} from './styles'

import { MEDIA_PATH } from 'utils/files/path'

const TeacherItem = teachers => {
  return (
    <SectionCourse>
      <SectionTitle>
        {teachers.teachers.length > 1 ? 'Docentes' : 'Docente'}
      </SectionTitle>
      {teachers.teachers.map(teacher => (
        <div key={teacher._id}>
          <CourseItemTeacherContent>
            <CourseItemTeacherImg
              src={MEDIA_PATH + teacher.photo}
              alt='Profesor'
              setDetail={true}
            />
            <CourseItemTeacherDescription>
              <CourseItemTeacherNames>{teacher.names}</CourseItemTeacherNames>
              <CourseItemTeacherText>
                {teacher.description}
              </CourseItemTeacherText>
            </CourseItemTeacherDescription>
          </CourseItemTeacherContent>
        </div>
      ))}
    </SectionCourse>
  )
}

export default TeacherItem

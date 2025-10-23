import Link from 'next/link'

import {
  CourseItemMain,
  CourseItemImg,
  CourseItemTeachers,
  CourseItemTeacher,
  CourseItemTeacherImg,
  CourseItemTeacherName,
  CourseItemTitle,
  CourseItemBtn,
  CourseImgTransition,
  CourseItemLink,
  DetailsCourse,
  CourseItemBody,
  CourseItemBtnText
} from './styles'

import { IconView } from './iconView'

import { MEDIA_PATH } from 'utils/files/path'
import { IconArrowNext } from './iconArrowNext'

const CourseItem = ({
  name,
  slug,
  shortimage,
  teachers,
  withoutTeacher,
  showHome,
  isTeacher = false
}) => {
  const courseImage = MEDIA_PATH + shortimage
  const setHome = showHome && true

  return (
    <CourseItemMain setHome={setHome} isTeacher={isTeacher}>
      <Link href='/cursos/[slug]' as={`/cursos/${slug}`}>
        <CourseImgTransition image={courseImage}>
          <CourseItemLink>
            <IconView />
            <DetailsCourse>Ver más detalles</DetailsCourse>
          </CourseItemLink>
        </CourseImgTransition>
      </Link>
      <CourseItemBody>
        <Link href='/cursos/[slug]' as={`/cursos/${slug}`}>
          <CourseItemTitle>{name}</CourseItemTitle>
        </Link>
        {!withoutTeacher && (
          <CourseItemTeachers>
            {teachers.map(teacher => (
              <CourseItemTeacher key={teacher._id}>
                <CourseItemTeacherImg
                  src={
                    teacher
                      ? MEDIA_PATH + teacher.photo
                      : '/static/img/SergioUrbina.jpeg'
                  }
                  alt='Profesor'
                />
                <CourseItemTeacherName>
                  {teacher ? teacher.names : 'Ing. Juan Beltrán'}
                </CourseItemTeacherName>
              </CourseItemTeacher>
            ))}
          </CourseItemTeachers>
        )}
        <Link href={`/cursos/${slug}`} as={`/cursos/${slug}`}>
          <CourseItemBtn>
            <CourseItemBtnText>Más información</CourseItemBtnText>
            <IconArrowNext size='14px' />
          </CourseItemBtn>
        </Link>
      </CourseItemBody>
    </CourseItemMain>
  )
}

export default CourseItem

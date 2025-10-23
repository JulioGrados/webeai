import Link from 'next/link'
import {
  TeacherItem,
  TeacherItemButton,
  TeacherItemImage,
  TeacherItemName,
  TeacherItemContainer,
  TeacherItemHover
} from './styles'

import { MEDIA_PATH } from 'utils/files/path'

const Teacher = ({ personalInfo, photo, username, names }) => {
  const namesTeacher = personalInfo
    ? personalInfo.names
    : names
    ? names
    : username
  return (
    <TeacherItem>
      <TeacherItemContainer>
        <TeacherItemImage src={MEDIA_PATH + photo} />
        <Link href='/docentes/[username]' as={`/docentes/${username}`}>
          <TeacherItemHover>
            <TeacherItemButton>Ver más</TeacherItemButton>
          </TeacherItemHover>
        </Link>
      </TeacherItemContainer>
      <TeacherItemName>{namesTeacher}</TeacherItemName>
    </TeacherItem>
  )
}

export default Teacher

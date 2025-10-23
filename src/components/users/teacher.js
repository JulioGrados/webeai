import {
  Teacher,
  TeacherArticle,
  TeacherName,
  TeacherSpan,
  TeacherText,
  TeacherCountry,
  TeacherItemImage,
  TeacherContent
} from './styles'

import { IconLocation } from './iconLocation'
import { MEDIA_PATH } from 'utils/files/path'

const TeacherDetail = ({ names, description, photo, country }) => {
  return (
    <Teacher>
      <TeacherArticle>
        <TeacherName>{names}</TeacherName>
        <TeacherSpan>profesor</TeacherSpan>
        <TeacherText>{description}</TeacherText>
      </TeacherArticle>
      <TeacherArticle>
        <TeacherContent>
          <TeacherItemImage src={MEDIA_PATH + photo} alt='Testimonio' />
          <div>
            <IconLocation />
            <TeacherCountry>{country}</TeacherCountry>
          </div>
        </TeacherContent>
      </TeacherArticle>
    </Teacher>
  )
}

export default TeacherDetail

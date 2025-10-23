import {
  SectionCourse,
  SectionTitle,
  TextAboutMore,
  TextAboutMoreOption,
  TextAboutCourse
} from './styles'
import { IconDown } from './iconDown'
import { IconArrow } from './iconArrow'
import { useState } from 'react'

const About = ({ text }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <SectionCourse>
      <SectionTitle>Acerca del curso</SectionTitle>
      <TextAboutCourse showMore={showMore}>{text}</TextAboutCourse>
      <TextAboutMore onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <TextAboutMoreOption>Mostrar menos</TextAboutMoreOption>
        ) : (
          <TextAboutMoreOption>Mostrar más</TextAboutMoreOption>
        )}
        {showMore ? <IconArrow /> : <IconDown />}
      </TextAboutMore>
    </SectionCourse>
  )
}

export default About

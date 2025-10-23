import { useTestimonies } from '../../hooks'
import ItemTestimonialCourse from './itemCourse'

import { SectionCourse, SectionTitle } from '../courses/styles'
import { TestimonialsCourseStyled } from './styles'

const TestimonialsCourse = ({ courseId, categoryId }) => {
  const { listCourse } = useTestimonies({ courseId, categoryId })
  // console.log(listCourse)
  return (
    <SectionCourse>
      <SectionTitle>Testimonios</SectionTitle>
      <TestimonialsCourseStyled>
        {listCourse.slice(0, 4).map(testimony => (
          <ItemTestimonialCourse key={testimony._id} testimony={testimony} />
        ))}
      </TestimonialsCourseStyled>
    </SectionCourse>
  )
}

export default TestimonialsCourse

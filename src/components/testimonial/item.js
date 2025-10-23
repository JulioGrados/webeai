import Link from 'next/link'
import { IconStar } from './iconStar'

import {
  TestimonialItem,
  TestimonialItemImg,
  TestimonialItemDate,
  TestimonialItemName,
  TestimonialItemStars,
  TestimonialItemText,
  TestimonialItemCourse,
  TestimonialsHeader
} from './styles'

const ItemTestimonial = ({ testimony, setHome }) => {
  // console.log('linked', testimony)
  return (
    <TestimonialItem setHome={setHome}>
      <TestimonialsHeader>
        <TestimonialItemImg
          isPhoto={
            testimony.linked &&
            testimony.linked.ref &&
            testimony.linked.ref.photo
          }
          setContent={`${testimony.linked &&
            testimony.linked.ref &&
            testimony.linked.ref.firstName.charAt(0)}${testimony.linked &&
            testimony.linked.ref &&
            testimony.linked.ref.lastName.charAt(0)}`}
        />
        <TestimonialItemName>{`${testimony.linked &&
          testimony.linked.ref &&
          testimony.linked.ref.firstName} ${testimony.linked &&
          testimony.linked.ref &&
          testimony.linked.ref.lastName}`}</TestimonialItemName>
        <TestimonialItemDate>
          {testimony.linked && testimony.linked.ref && testimony.linked.ref.dni}{' '}
          -{' '}
          {testimony.linked &&
            testimony.linked.ref &&
            testimony.linked.ref.department}
        </TestimonialItemDate>
        <TestimonialItemStars>{<IconStar />}</TestimonialItemStars>
      </TestimonialsHeader>
      <TestimonialItemText>{testimony.comment}</TestimonialItemText>
      <Link
        href='/cursos/[slug]'
        as={`/cursos/${testimony.course &&
          testimony.course.ref &&
          testimony.course.ref.slug}`}
      >
        <TestimonialItemCourse>
          {testimony.course &&
            testimony.course.ref &&
            testimony.course.ref.name}
        </TestimonialItemCourse>
      </Link>
    </TestimonialItem>
  )
}

export default ItemTestimonial

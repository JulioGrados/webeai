import { IconStar } from './iconStar'

import {
  ItemTestimonialCourseStyled,
  ItemTestimonialCourseHeader,
  ItemTestimonialCourseImg,
  ItemTestimonialCourseHeaderInfo,
  ItemTestimonialCourseStars,
  ItemTestimonialCourseUser,
  ItemTestimonialCourseDepartment,
  ItemTestimonialCourseBody
} from './styles'
const ItemTestimonialCourse = ({ testimony }) => {
  return (
    <ItemTestimonialCourseStyled>
      <ItemTestimonialCourseHeader>
        <ItemTestimonialCourseImg
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
        <ItemTestimonialCourseHeaderInfo>
          <ItemTestimonialCourseStars>
            {<IconStar />}
          </ItemTestimonialCourseStars>
          <ItemTestimonialCourseUser>{`${testimony.linked &&
            testimony.linked.ref &&
            testimony.linked.ref.firstName} ${testimony.linked &&
            testimony.linked.ref &&
            testimony.linked.ref.lastName}`}</ItemTestimonialCourseUser>
          <ItemTestimonialCourseDepartment>
            {testimony.linked &&
              testimony.linked.ref &&
              testimony.linked.ref.dni}{' '}
            -{' '}
            {testimony.linked &&
              testimony.linked.ref &&
              testimony.linked.ref.department}
          </ItemTestimonialCourseDepartment>
          <ItemTestimonialCourseBody>
            {testimony.comment}
          </ItemTestimonialCourseBody>
        </ItemTestimonialCourseHeaderInfo>
      </ItemTestimonialCourseHeader>
    </ItemTestimonialCourseStyled>
  )
}

export default ItemTestimonialCourse

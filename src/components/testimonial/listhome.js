import ItemTestimonial from './item'
import Companys from './companys'
import Link from 'next/link'

import { Testimonials, TestimonialsBtnContent, TestimonialsBtn } from './styles'
import { useTestimonies } from '../../hooks'

const ListTestimonials = ({ setHome }) => {
  const { testimonies } = useTestimonies()
  // console.log('testimonies', testimonies)
  return (
    <>
      <Testimonials setHome={setHome}>
        {testimonies.slice(0, 3).map(testimony => (
          <ItemTestimonial key={testimony._id} testimony={testimony} setHome />
        ))}
      </Testimonials>
      <Link id='#testimonios' href='/testimonios'>
        <TestimonialsBtnContent>
          <TestimonialsBtn>Ver más testimonios</TestimonialsBtn>
        </TestimonialsBtnContent>
      </Link>
      <Companys />
    </>
  )
}

export default ListTestimonials

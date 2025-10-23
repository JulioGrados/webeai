import { ContainerTestimonials, Button } from './styles'
import ItemTestimonial from './item'
import { IconStar } from './iconStar'
import { useTestimonies } from '../../hooks'

const ListPageTestimonials = () => {
  const { testimonies } = useTestimonies()
  return (
    <ContainerTestimonials>
      {testimonies.map(testimony => (
        <ItemTestimonial key={testimony._id} testimony={testimony} />
      ))}
    </ContainerTestimonials>
  )
}

export default ListPageTestimonials

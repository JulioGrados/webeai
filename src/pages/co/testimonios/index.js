import {
  Header,
  Article,
  Comunicate,
  Footer,
  ListPageTestimonials,
  HeadPage
} from '../../../components'

import { Container } from '../../../styles/main'

const Testimonials = ({ meta }) => {
  return (
    <>
      <HeadPage title='Testimonios' meta={meta} />
      <Header />
      <Container>
        <Article
          title='testimonios'
          text='Escuela Americana de Innovación cuenta con los mejores profesionales de las instituciones educativas, científicas, tecnológicas y culturales más importantes a nivel nacional. A continuación detallamos a todos nuestros docentes:'
        >
          <ListPageTestimonials />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default Testimonials

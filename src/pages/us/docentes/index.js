import { Footer, Header, Article, Comunicate, HeadPage } from '../../../components'
import { ListTeachers } from '../../../containers'

import { Container } from '../../../styles/main'

const Teachers = ({ meta }) => {
  return (
    <>
      <HeadPage
        title='Docentes'
        description='Tenemos la mejor plana docente del Perú.'
        meta={meta}
      />
      <Header />
      <Container>
        <Article
          title='Docentes'
          text='Escuela Americana de Innovación cuenta con los mejores profesionales de las empresas, instituciones educativas, científicas, tecnológicas y culturales más importantes a nivel nacional. A continuación detallamos a todos nuestros docentes:'
        >
          <ListTeachers />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default Teachers

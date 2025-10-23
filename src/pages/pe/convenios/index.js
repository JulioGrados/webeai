import { Footer, Header, Article, Comunicate, HeadPage } from '../../../components'
import { ListAgreements } from '../../../containers'

import { Container } from '../../../styles/main'

const Agrements = ({ meta }) => {
  return (
    <>
      <HeadPage title='Convenios' meta={meta} />
      <Header />
      <Container>
        <Article
          title='Convenios'
          text='Escuela Americana de Innovación mantiene acuerdos de cooperación mutua con importantes instituciones educativas,científicas,tecnológicas y culturales nacionales, para fomentar el desarrollo del conocimientoy la innovación, así como la formación académica y profesional de nuestros estudiantes. A continuación detallamos algunos de nuestros convenios:'
        >
          <ListAgreements all={true} />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default Agrements

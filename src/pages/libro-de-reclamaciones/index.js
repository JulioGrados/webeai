import {
  Header,
  Footer,
  Claims,
  Article,
  Comunicate,
  HeadPage
} from '../../components'
import { Container } from '../../styles/main'

const ClaimsPage = ({ meta }) => {
  return (
    <>
      <HeadPage
        title='Libro de reclamaciones'
        meta={meta}
      />
      <Header />
      <Container>
        <Article title='Libro de reclamaciones'>
        <Claims />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default ClaimsPage

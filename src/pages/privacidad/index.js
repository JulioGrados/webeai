import { Header, Footer, Politics, HeadPage } from '../../components'
import { Container } from '../../styles/main'

const PoliticsHome = ({ meta }) => {
  return (
    <>
      <HeadPage title='Privacidad' meta={meta} />
      <Header />
      <Container>
        <Politics />
      </Container>
      <Footer />
    </>
  )
}

export default PoliticsHome

import { Header, Footer, Conditions, HeadPage } from '../../components'
import { Container } from '../../styles/main'

const ConditionsHome = ({ meta }) => {
  return (
    <>
      <HeadPage title='Términos y condiciones' meta={meta} />
      <Header />
      <Container>
        <Conditions />
      </Container>
      <Footer />
    </>
  )
}

export default ConditionsHome
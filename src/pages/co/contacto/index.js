import {
  Header,
  Footer,
  Contact,
  Article,
  Comunicate,
  HeadPage
} from '../../../components'
import { Container } from '../../../styles/main'

const ContactPage = ({ meta }) => {
  return (
    <>
      <HeadPage
        title='Contacto'
        description='Respondemos a todas tus dudas'
        meta={meta}
      />
      <Header />
      <Container>
        <Article title='contacto'>
          <Contact />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default ContactPage

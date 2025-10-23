import { useRouter } from 'next/router'
import { Footer, Header, Comunicate, HeadPage } from '../../../components'
import { DetailAgreement } from '../../../containers'

import { Container } from '../../../styles/main'

const Agreement = ({ meta }) => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <HeadPage
        title='Convenios'
        description='Obten tu certificado a nombre de estas instituciones.'
        meta={meta}
      />
      <Header />
      <Container>
        <DetailAgreement slug={slug} />
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default Agreement

import { Header, Article, Footer, HeadPage } from '../../../components'
import VipComp from '../../../components/vip'
import { Container } from '../../../styles/main'
const Vip = ({ meta }) => {
  return (
    <>
      <HeadPage title='Felicitaciones' meta={meta} />
      <Header />
      <Container>
        <VipComp />
      </Container>
    </>
  )
}

export default Vip

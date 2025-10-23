import { useRouter } from 'next/router'

import { Footer, Header, Comunicate, Article, HeadPage } from '../../../components'
import { Container } from '../../../styles/main'
import { ListSearchCourse } from '../../../containers'

const CoursesSearch = ({ meta, country = 'CO' }) => {
  const router = useRouter()
  const { search } = router.query
  
  return (
    <>
      <HeadPage title='Resultados' meta={meta} />
      <Header />
      <Container>
        <Article title={`Cursos "${search}"`}>
          <ListSearchCourse search={search} />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default CoursesSearch

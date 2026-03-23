import { useRouter } from 'next/router'
import {
  Header,
  Comunicate,
  Footer,
  DetailBlog,
  HeadPage
} from '../../components'

import { Container } from '../../styles/main'

const BlogDetailPage = ({ meta }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <HeadPage title='Blog' meta={meta} />
      <Header />
      <Container>
        <DetailBlog blogId={id} />
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default BlogDetailPage

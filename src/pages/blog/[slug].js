import { useRouter } from 'next/router'
import {
  Header,
  Comunicate,
  Footer,
  HeadPage
} from '../../components'

import { Container } from '../../styles/main'
import DetailBlogBySlug from '../../components/blog/detailBySlug'

const BlogDetailPage = ({ meta }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <HeadPage title='Blog' meta={meta} />
      <Header />
      <Container>
        <DetailBlogBySlug slug={slug} />
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default BlogDetailPage

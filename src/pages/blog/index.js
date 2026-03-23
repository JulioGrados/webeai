import {
  Header,
  Article,
  Comunicate,
  Footer,
  ListBlogs,
  HeadPage
} from '../../components'

import { Container } from '../../styles/main'

const BlogPage = ({ meta }) => {
  return (
    <>
      <HeadPage title='Blog' meta={meta} />
      <Header />
      <Container>
        <Article
          title='Blog'
          text='Mantente informado con las últimas noticias, tutoriales y artículos de Escuela Americana de Innovación. Aquí encontrarás contenido relevante para tu crecimiento profesional.'
        >
          <ListBlogs />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default BlogPage

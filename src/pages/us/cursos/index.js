import {
  Footer,
  Header,
  ListCourseCategories,
  HeadPage
} from '../../../components'

import { Container, Section } from '../../../styles/main'

const Courses = ({ meta, country = 'PE' }) => {

  return (
    <>
      <HeadPage
        title='Cursos'
        description='Certificate en cualquiera de todos los cursos que ofrecemos para ti.'
        meta={meta}
      />
      <Header />
      <Section>
        <Container>
          <ListCourseCategories title='cursos' />
        </Container>
      </Section>
      <Footer />
    </>
  )
}

export default Courses

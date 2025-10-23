import {
  Footer,
  Header,
  HeadPage,
  DetailCourse,
  HeaderCourse,
  Error404
} from '../../../components'
import { Container, Section } from '../../../styles/main'
import { detailOpenCourse } from 'utils/api/courses'

const Course = ({ data, meta, country = 'PE' }) => {
  const course = data
  if (!course.name) return <Error404 />

  return (
    <>
      <HeadPage meta={meta} title={course.name} extra={course} />
      <Header course={course} />
      <HeaderCourse course={course} />
      <Section>
        <Container>
          <DetailCourse {...course} />
        </Container>
      </Section>
      <Footer />
    </>
  )
}

Course.getInitialProps = async ctx => {
  const { slug } = ctx.query
  const data = await detailOpenCourse({
    query: { slug }
  })
  if (data) {
    return { data }
  }

  return { }
}

export default Course

import { useRouter } from 'next/router'
import {
  Footer,
  Header,
  Article,
  Comunicate,
  HeadPage,
  TeacherCourses
} from '../../../components'
import { DetailTeacher } from '../../../containers'

import { Container } from '../../../styles/main'

const Teacher = ({ meta }) => {
  const router = useRouter()
  const { username } = router.query
  return (
    <>
      <HeadPage title='Docentes' meta={meta} />
      <Header />
      <Container>
        <Article title='Docentes'>
          <DetailTeacher username={username} />
          <TeacherCourses username={username} />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

export default Teacher

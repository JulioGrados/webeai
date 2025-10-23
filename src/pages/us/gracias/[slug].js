import { Footer, Header, HeadPage, PaymentInfo } from '../../../components'

import { ContainerMedium, Section } from '../../../styles/main'

import { detailOpenCourse } from 'utils/api/courses'

const Thanks = ({ course, meta }) => {
  return (
    <>
      <HeadPage title={`Información del ${course.name}`} meta={meta} />
      <Header />
      <Section>
        <ContainerMedium>
          <PaymentInfo {...course} />
        </ContainerMedium>
      </Section>
      <Footer />
    </>
  )
}

Thanks.getInitialProps = async ctx => {
  const { slug, redirect } = ctx.query

  if (redirect && ctx.res) {
    ctx.res.redirect(`/cursos/${slug}`)
  }

  const data = await detailOpenCourse({
    query: { slug }
  })
  if (data) {
    return { course: data }
  }

  return {}
}

export default Thanks

import Router from 'next/router'
import { Footer, Header, HeadPage, PaymentInfo } from '../../components'
import { ContainerMedium, Section } from '../../styles/main'
import { detailOpenConfirmation } from 'utils/api/confirmations'
import { Confirmation } from '../../components/courses/confirmation'

const aboves = ['CO']

const Free = ({ meta, course, user }) => {
  console.log('course', course)
  return (
    <>
      <HeadPage title={`Información del ${course && course.name}`} meta={meta} />
      <Header />
      <Section>
        <ContainerMedium>
          <Confirmation course={course} user={user} />
        </ContainerMedium>
      </Section>
      <Footer />
    </>
  )
}

Free.getInitialProps = async ctx => {
  const { id, redirect } = ctx.query
  
  if (redirect && ctx.res) {
    ctx.res.redirect(`/`)
  }
  
  const confirmation = await detailOpenConfirmation(id,
    {
      populate: [
        'user',
        'course'
      ]
    }
  )
  
  if (confirmation) {
    return { course: confirmation.course, user: confirmation.user, confirmation: confirmation }
  }

  return {}
}

export default Free

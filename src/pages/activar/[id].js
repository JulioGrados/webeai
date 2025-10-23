import Router from 'next/router'
import { Error404, Footer, Header, HeadPage, PaymentInfo } from '../../components'
import { ContainerMedium, Section } from '../../styles/main'
import { detailOpenConfirmation } from 'utils/api/confirmations'
import { ActivationPage } from '../../components/courses/activation'

const aboves = ['CO']

const Activation = ({ meta, confirmation, user, course }) => {
  console.log('confirmation', confirmation)
  console.log('user', user)
  console.log('course', course)
  return (
    <>
      <HeadPage title={`Activar cuenta`} meta={meta} />
      <Header />
      <Section>
        <ContainerMedium>
          <ActivationPage confirmation={confirmation} user={user} course={course} />
        </ContainerMedium>
      </Section>
      <Footer />
    </>
  )
}

Activation.getInitialProps = async ctx => {
  const { id, redirect } = ctx.query
  
  if (redirect && ctx.res) {
    ctx.res.redirect(`/`)
  }
  
  const confirmation = await detailOpenConfirmation(id,
    {
      populate: [
        'user', 'course'
      ]
    }
  )
  
  if (confirmation) {
    return { confirmation: confirmation, user: confirmation.user, course: confirmation.course }
  }

  return {}
}

export default Activation

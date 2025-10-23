import Router from 'next/router'
import { Footer, Header, HeadPage, PaymentInfo } from '../../components'

import { ContainerMedium, Section } from '../../styles/main'

import { detailOpenCourse } from 'utils/api/courses'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const Thanks = ({ course, meta, country }) => {
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
  console.log('ctx', ctx)
  // let country = getCookie('country')
  // country = country && JSON.parse(country)
  // if (country || ctx && ctx.req && ctx.req.country) {
  //   country = country ? country.code : ctx.req.country
  //   if (aboves.some(above => above === country)) {
  //     if (ctx.res && country) {
  //       ctx.res.writeHead(302, {
  //         Location: `/${country.toLowerCase()}${ctx.asPath}`
  //       })
  //       ctx.res.end()
  //     } else if (country) {
  //       Router.push(`/${country.toLowerCase()}${ctx.asPath}`)
  //     }
  //   } else {
  //     if (!countries.some(item => item.code === country)) {
  //       if (ctx.res && country) {
  //         ctx.res.writeHead(302, {
  //           Location: `/pe${ctx.asPath}`
  //         })
  //         ctx.res.end()
  //       } else if (country) {
  //         Router.push(`/pe${ctx.asPath}`)
  //       }
  //     }
  //   }
  // }

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

import Router from 'next/router'
import {
  Footer,
  Header,
  HeadPage,
  DetailCourse,
  HeaderCourse,
  Error404
} from '../../components'
import { Container, Section } from '../../styles/main'
import { detailOpenCourse } from 'utils/api/courses'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const Course = ({ data, meta, country }) => {
  const course = data
  if (!course.name) return <Error404 />

  return (
    <>
      <HeadPage meta={meta} title={course.name} extra={course} />
      <Header course={course} />
      <HeaderCourse course={course} isConfirmation={course.isConfirmation} />
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

  const data = await detailOpenCourse({
    query: { slug }
  })
  if (data) {
    return { data }
  }

  return { }
}

export default Course

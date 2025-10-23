import Router from 'next/router'
import {
  Footer,
  Header,
  ListCourseCategories,
  HeadPage
} from '../../components'

import { Container, Section } from '../../styles/main'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const Courses = ({ meta, country }) => {

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

// Courses.getInitialProps = async ctx => {
//   let country = getCookie('country')
//   country = country && JSON.parse(country)
//   if (country || ctx && ctx.req && ctx.req.country) {
//     country = country ? country.code : ctx.req.country
//     if (aboves.some(above => above === country)) {
//       if (ctx.res && country) {
//         ctx.res.writeHead(302, {
//           Location: `/${country.toLowerCase()}${ctx.asPath}`
//         })
//         ctx.res.end()
//       } else if (country) {
//         Router.push(`/${country.toLowerCase()}${ctx.asPath}`)
//       }
//     } else {
//       if (!countries.some(item => item.code === country)) {
//         if (ctx.res && country) {
//           ctx.res.writeHead(302, {
//             Location: `/pe${ctx.asPath}`
//           })
//           ctx.res.end()
//         } else if (country) {
//           Router.push(`/pe${ctx.asPath}`)
//         }
//       }
//     }
//   }
  
//   return { country }
// }

export default Courses

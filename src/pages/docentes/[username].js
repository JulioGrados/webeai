import Router from 'next/router'
import { useRouter } from 'next/router'
import {
  Footer,
  Header,
  Article,
  Comunicate,
  HeadPage,
  TeacherCourses
} from '../../components'
import { DetailTeacher } from '../../containers'
import { Container } from '../../styles/main'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

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

// Teacher.getInitialProps = async (ctx) => {
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

export default Teacher

import Router from 'next/router'
import { useRouter } from 'next/router'

import { Footer, Header, Comunicate, Article, HeadPage } from '../../components'
import { Container } from '../../styles/main'
import { ListSearchCourse } from '../../containers'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const CoursesSearch = ({ meta, country }) => {
  const router = useRouter()
  const { search } = router.query
  
  return (
    <>
      <HeadPage title='Resultados' meta={meta} />
      <Header />
      <Container>
        <Article title={`Cursos "${search}"`}>
          <ListSearchCourse search={search} />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

// CoursesSearch.getInitialProps = async ctx => {
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

export default CoursesSearch

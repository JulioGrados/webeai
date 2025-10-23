import Router from 'next/router'
import { Footer, Header, Article, Comunicate, HeadPage } from '../../components'
import { ListTeachers } from '../../containers'
import { Container } from '../../styles/main'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const Teachers = ({ meta, country }) => {
  return (
    <>
      <HeadPage
        title='Docentes'
        description='Tenemos la mejor plana docente del Perú.'
        meta={meta}
      />
      <Header />
      <Container>
        <Article
          title='Docentes'
          text='Escuela Americana de Innovación cuenta con los mejores profesionales de las empresas, instituciones educativas, científicas, tecnológicas y culturales más importantes a nivel nacional. A continuación detallamos a todos nuestros docentes:'
        >
          <ListTeachers />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

// Teachers.getInitialProps = async (ctx) => {
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

export default Teachers

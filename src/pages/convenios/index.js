import Router from 'next/router'
import { Footer, Header, Article, Comunicate, HeadPage } from '../../components'
import { ListAgreements } from '../../containers'

import { Container } from '../../styles/main'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const Agrements = ({ meta }) => {
  return (
    <>
      <HeadPage title='Convenios' meta={meta} />
      <Header />
      <Container>
        <Article
          title='Convenios'
          text='Escuela Americana de Innovación mantiene acuerdos de cooperación mutua con importantes instituciones educativas,científicas,tecnológicas y culturales nacionales, para fomentar el desarrollo del conocimientoy la innovación, así como la formación académica y profesional de nuestros estudiantes. A continuación detallamos algunos de nuestros convenios:'
        >
          <ListAgreements all={true} />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

// Agrements.getInitialProps = async (ctx) => {
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

export default Agrements

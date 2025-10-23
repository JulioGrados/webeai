import Router from 'next/router'
import {
  Header,
  Footer,
  Contact,
  Article,
  Comunicate,
  HeadPage
} from '../../components'
import { Container } from '../../styles/main'
import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const ContactPage = ({ meta }) => {
  return (
    <>
      <HeadPage
        title='Contacto'
        description='Respondemos a todas tus dudas'
        meta={meta}
      />
      <Header />
      <Container>
        <Article title='contacto'>
          <Contact />
        </Article>
      </Container>
      <Comunicate />
      <Footer />
    </>
  )
}

// ContactPage.getInitialProps = async (ctx) => {
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

export default ContactPage

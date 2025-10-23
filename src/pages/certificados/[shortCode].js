import Router from 'next/router'
import { Certificate, HeadPage } from '../../components'
import { useRouter } from 'next/router'

import { getCookie } from 'utils/functions/session'

import countries from 'utils/functions/countries'

const aboves = ['CO']

const PageCertificate = ({ meta }) => {
  const router = useRouter()
  const { shortCode } = router.query

  return (
    <>
      <HeadPage title='Certificado' meta={meta} />
      <Certificate shortCode={shortCode} />
    </>
  )
}

// PageCertificate.getInitialProps = async (ctx) => {
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

export default PageCertificate

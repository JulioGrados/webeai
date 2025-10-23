import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux'

import { GlobalStyle } from '../styles/GlobalStyle'
import { detailOpenMeta } from 'utils/api/metas'

import { setCookie } from 'utils/functions/session'
import { getCookie } from 'utils/functions/session'
import { useEffect } from 'react'

import countries from 'utils/functions/countries'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-NL8633T'
}

const MyApp = ({ Component, pageProps, store, meta, country }) => {
  
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  })
  
  useEffect(() => {
    if (country) {
      const countryItem = countries.find(
        item => item.code === country
      )
      // console.log('countryItem', countryItem)
      if (countryItem) {
        setCookie('country', countryItem)
      } else {
        const countryPE = countries.find(
          item => item.code === 'PE'
        )
        setCookie('country', countryPE)
      }
    }
  }, [country])

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} meta={meta} country={country} />
        <GlobalStyle />
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let meta, country
  try {
    meta = await detailOpenMeta({
      query: {
        domain: 'https://www.eai.edu.pe'
      }
    })
  } catch (error) {
    console.log(error)
  }
  if (ctx.req) {
    if (ctx.req.cookies && ctx.req.cookies.country) {
      country = ctx.req.cookies.country.code
    } else if (ctx.req.country) {
      country = ctx.req.country
    }
  }
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  return { pageProps, meta, country }
}

export default withRedux(initStore)(MyApp)

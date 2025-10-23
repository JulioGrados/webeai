export const GA_TRACKING_ID = 'GTM-NL8633T'

export const pageview = url => {
  console.log(url)
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

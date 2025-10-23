import Head from 'next/head'
import { useRouter } from 'next/router'
import { MEDIA_PATH } from 'utils/files/path'
import { replaceVariables } from 'utils/functions/transform'

const HeadPage = ({ meta, title, description, extra }) => {
  const router = useRouter()

  let pathCanonical = router.asPath !== '/' ? router.asPath : ''

  const metaPage =
    meta && meta.pages && meta.pages.find(item => item.root === router.pathname)

  if (metaPage) {
    title = replaceVariables(metaPage.title, extra)
    description = replaceVariables(metaPage.description, extra)
  }

  if (extra && extra.titleSEO) {
    if (meta && meta.og) {
      meta.og.title = extra.titleSEO
    }
    title = extra.titleSEO
  }

  if (extra && extra.descriptionSEO) {
    if (meta && meta.og) {
      meta.og.description = extra.descriptionSEO
    }
    description = extra.descriptionSEO
  }

  if (extra && extra.opengraph && meta && meta.og) {
    meta.og.image = extra.opengraph
  }

  if (extra && meta && meta.og) {
    meta.og.url += router.asPath
  }

  if (!title && meta) {
    title = meta.title
  }

  if (!description && meta) {
    description = meta.description
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />

      {meta && meta.og && (
        <>
          <meta property='og:description' content={meta.og.description} />
          <meta property='og:title' content={meta.og.title} />
          <meta property='og:type' content={meta.og.type || 'website'} />
          <meta property='og:url' content={meta.og.url} />
          <meta property='og:image' content={MEDIA_PATH + meta.og.image} />
          <meta property='og:site_name' content={meta.og.sitename} />
        </>
      )}
      {meta && meta.fb && (
        <>
          <meta property='fb:admins' content={meta.fb.id} />
          <meta
            property='og:image'
            content={MEDIA_PATH + (meta.fb.image || meta.og.image)}
          />
        </>
      )}
      {meta && meta.tw && (
        <>
          <meta name='twitter:title' content={meta.og.title} />
          <meta name='twitter:description' content={meta.og.description} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:account_id' content={meta.tw.id} />
          <meta name='twitter:site' content={meta.tw.page} />
          <meta name='twitter:creator' content={meta.tw.page} />
          <meta
            name='twitter:image:src'
            content={MEDIA_PATH + (meta.tw.image || meta.og.image)}
          />
          <meta name='twitter:domain' content={meta.og.url} />
        </>
      )}

      <link rel='shortcut icon' href='/static/img/favicon.png' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta http-equiv='X-UA-Compatible' content='IE=Edge' />
      <meta charset='utf-8' />
      <link
        rel='canonical'
        href={'https://www.eai.edu.pe' + pathCanonical}
      ></link>
    </Head>
  )
}

export default HeadPage

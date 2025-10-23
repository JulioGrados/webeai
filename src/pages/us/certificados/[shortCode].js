import { Certificate, HeadPage } from '../../../components'
import { useRouter } from 'next/router'

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

export default PageCertificate

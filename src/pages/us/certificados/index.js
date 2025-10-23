import { Certifications, HeadPage } from '../../../components'

const CertificatePage = ({ meta }) => {
  return (
    <>
      <HeadPage title='Certificados' meta={meta} />
      <Certifications />
    </>
  )
}

export default CertificatePage

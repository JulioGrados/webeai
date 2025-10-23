import {
  ContainerCertificate,
  CertificateSvg,
  CertificateLogo,
  CertificateTitle,
  CertificateSubTitle,
  CertificateSection,
  CertificateInput,
  CertificadoSearch,
  ButtonCertificate
} from './styles'

import { Container } from '../../styles/main'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Certifications = () => {
  const router = useRouter()
  const [shortCode, setShortCode] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    router.push(`/certificados/[shortCode]`, `/certificados/${shortCode}`)
  }
  return (
    <ContainerCertificate>
      <CertificateSvg>
        <Link href='/'>
          <CertificateLogo src='/static/img/eai-logo.svg' />
        </Link>
      </CertificateSvg>
      <CertificateSection>
        <Container>
          <CertificateTitle>
            CERTIFICADO DIGITAL DE ESCUELA AMERICANA DE INNOVACIóN
          </CertificateTitle>
          <CertificateSubTitle>
            Busca el código del certificado y obtenlo digital
          </CertificateSubTitle>
          <CertificadoSearch>
            <CertificateInput
              value={shortCode}
              onChange={e => setShortCode(e.target.value)}
              placeholder='Escribe el código del certificado aquí'
            />
            <ButtonCertificate onClick={handleSubmit}>
              Buscar certificado
            </ButtonCertificate>
          </CertificadoSearch>
        </Container>
      </CertificateSection>
    </ContainerCertificate>
  )
}

export default Certifications

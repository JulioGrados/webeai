import Error404 from '../error/404'
import CanvasImage from './canvas'

import {
  HeaderCertificate,
  TitleCertificate,
  CertificateLogoHeader,
  SectionCertificate,
  CertificateCanvas,
  CertificateImg,
  CertificateHeader,
  CertificateHeaderUser,
  CertificateHeaderUserIcon,
  CertificateHeaderUserName,
  CertificateHeaderImg,
  CertificateHeaderUserIconGif,
  CertificateBody,
  CertificateBodyScore,
  CertificateScoreHeader,
  CertificateScoreHeaderTitle,
  CertificateBodyData,
  CertificateBodyUser,
  CertificateBodyUserTitle,
  CertificateBodyMod,
  CertificateBodyIssue,
  CertificateBodyQualification,
  CertificateBodyLeft,
  CertificateBodyRight,
  CertificateBodyRightItem,
  CertificateBodyUserItem,
  CertificateBodyUserItemTitle,
  CertificateBodyUserItemText,
  CertificateBodyNext,
  CertificateBodyNextTitle
} from './styles'
import { ListCourses, Footer, Header } from '../../components'
import { Container, General } from '../../styles/main'

import { MEDIA_PATH } from 'utils/files/path'

import { useCertificate } from '../../hooks'

const Certificate = ({ shortCode }) => {
  const { certificate, loading } = useCertificate({
    query: { shortCode }
  })
  if (loading) {
    return 'Cargando ...'
  }
  if (!certificate && loading === false) {
    return <Error404 />
  }
  console.log('certificate', certificate)
  return (
    <>
      {/* <HeaderCertificate>
        <CertificateLogoHeader src='/static/img/eai-logo.svg' />
      </HeaderCertificate> */}
      <Header />
      <General>
        <Container>
          <SectionCertificate>
            <CertificateHeader>
              <CertificateHeaderUser>
                <CertificateHeaderUserIcon>
                <CertificateHeaderUserIconGif src='/static/img/certificate.gif' />
                </CertificateHeaderUserIcon>
                <CertificateHeaderUserName>
                  Este certificado fue emitido a {certificate.linked.ref.firstName} {certificate.linked.ref.lastName}.
                </CertificateHeaderUserName>
              </CertificateHeaderUser>
              {
                certificate.googleId ? 
                  <CertificateHeaderImg src={'data:image/png;base64,' + certificate.png} />
                  :
                  <CertificateHeaderImg src={MEDIA_PATH + certificate.file1} />
              }
            </CertificateHeader>
            <CertificateBody>
              <CertificateBodyScore>
                <CertificateScoreHeader>
                  <CertificateScoreHeaderTitle>Reporte de notas</CertificateScoreHeaderTitle>
                  <div>
                    
                  </div>
                </CertificateScoreHeader>
                <CertificateBodyData>
                  <CertificateBodyLeft>
                    <CertificateBodyUser>
                      <CertificateBodyUserTitle header>
                        Datos
                      </CertificateBodyUserTitle>
                      <CertificateBodyUserItem>
                        <CertificateBodyUserItemTitle>
                          Apellidos y nombres:
                        </CertificateBodyUserItemTitle>
                        <CertificateBodyUserItemText>
                          {certificate.linked.ref.lastName},
                        </CertificateBodyUserItemText>
                        <CertificateBodyUserItemText>
                          {certificate.linked.ref.firstName}
                        </CertificateBodyUserItemText>
                      </CertificateBodyUserItem>
                      <CertificateBodyUserItem>
                        <CertificateBodyUserItemTitle>
                          D.O.I.:
                        </CertificateBodyUserItemTitle>
                        <CertificateBodyUserItemText>
                          {certificate.linked.ref.dni}
                        </CertificateBodyUserItemText>
                      </CertificateBodyUserItem>
                      <CertificateBodyUserItem>
                        <CertificateBodyUserItemTitle>
                          Certificado Nº:
                        </CertificateBodyUserItemTitle>
                        <CertificateBodyUserItemText>
                          {certificate.number}
                        </CertificateBodyUserItemText>
                      </CertificateBodyUserItem>
                      <CertificateBodyUserItem>
                        <CertificateBodyUserItemTitle>
                          Código de verificación:
                        </CertificateBodyUserItemTitle>
                        <CertificateBodyUserItemText>
                          {certificate.shortCode}
                        </CertificateBodyUserItemText>
                      </CertificateBodyUserItem>
                    </CertificateBodyUser>
                  </CertificateBodyLeft>
                  <CertificateBodyRight>
                    <CertificateBodyRightItem>
                      <CertificateBodyMod>
                        <CertificateBodyUserTitle header>
                          Mód.
                        </CertificateBodyUserTitle>
                      </CertificateBodyMod>
                      <CertificateBodyIssue>
                        <CertificateBodyUserTitle header>
                          Tema
                        </CertificateBodyUserTitle>
                      </CertificateBodyIssue>
                      <CertificateBodyQualification>
                        <CertificateBodyUserTitle header>
                          Nota
                        </CertificateBodyUserTitle>
                      </CertificateBodyQualification>
                    </CertificateBodyRightItem>
                    {certificate.modules.map(module => (
                      <CertificateBodyRightItem>
                        <CertificateBodyMod>
                          <CertificateBodyUserTitle mod>
                            {module.number < 10 ? '0' + module.number : module.number}
                          </CertificateBodyUserTitle>
                        </CertificateBodyMod>
                        <CertificateBodyIssue>
                          <CertificateBodyUserTitle>
                            {module.name}
                          </CertificateBodyUserTitle>
                        </CertificateBodyIssue>
                        <CertificateBodyQualification>
                          <CertificateBodyUserTitle mod>
                            {module.score}
                          </CertificateBodyUserTitle>
                        </CertificateBodyQualification>
                      </CertificateBodyRightItem>
                    ))}
                  </CertificateBodyRight>
                </CertificateBodyData>
              </CertificateBodyScore>
              <CertificateBodyNext>
                <CertificateBodyNextTitle>Continúa preparándote:</CertificateBodyNextTitle>
                <ListCourses courses={certificate.courses} />
              </CertificateBodyNext>
            </CertificateBody>
          </SectionCertificate>
        </Container>
        <Footer />
      </General>
    </>
  )
}
export default Certificate
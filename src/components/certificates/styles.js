import styled from 'styled-components'

export const CertificateSvg = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

export const CertificateLogo = styled.img`
  width: 140px;
  height: 90px;
  cursor: pointer;
`

export const ContainerCertificate = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(1, 1, 1, 0.8), rgba(1, 1, 1, 0.8)),
    #000000 url(/static/img/home.jpg) no-repeat center;
  background-size: cover;
`

export const CertificateTitle = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 45px;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const CertificateSubTitle = styled.h3`
  color: #fff;
  margin: 0;
  font-size: 22px;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const CertificateSection = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
`

export const CertificateInput = styled.input`
  width: 300px;
  height: 45px;
  margin-right: 15px;
  padding: 10px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 500;
  @media (max-width: 768px) {
    width: calc(78% - 76px);
  }
`

export const CertificadoSearch = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonCertificate = styled.a`
  width: 200px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #0077e2;
  cursor: pointer;
  :hover {
    background-color: #00427d;
  }
`

export const HeaderCertificate = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 4px 0 rgba(105, 106, 119, 0.1);
  padding: 0 90px;
`

export const CertificateLogoHeader = styled.img`
  width: 130px;
  height: 80px;
`

export const SectionCertificate = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  /* cursor: none; */
`

export const CertificateButton = styled.a`
  width: 230px;
  height: 40px;
  line-height: 38px;
  background-color: #fff;
  border: 2px solid #0077e2;
  border-radius: 50px;
  color: #0077e2;
  font-weight: 500;
  font-size: 14px;
  display: block;
  text-align: center;
  line-height: 2.7;
  cursor: pointer;
  :hover {
    background-color: #0077e2;
    color: #fff;
  }
`

export const CertificateButtons = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`

export const TitleCertificate = styled.h1`
  margin: 0;
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
  text-transform: uppercase;
`

export const CertificateCanvas = styled.div`
  box-shadow: 0 0 2px 1px rgba(165, 156, 156, 0.33);
  text-align: center;
  width: 100%;
  height: 100%;
  /* pointer-events: none; */
  margin-bottom: 15px;
`

export const CertificateImg = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
  cursor: default;
`

export const CertificateHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 60px;
  color: #364166;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CertificateHeaderUser = styled.div`
  width: 351px;
  display: flex;
  padding-right: 50px;
  margin-top: 17px;
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
  }
`

export const CertificateHeaderUserIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CertificateHeaderUserName = styled.p`
  width: calc(100% - 56px);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-left: 8px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`

export const CertificateHeaderImg = styled.img`
  width: calc(100% - 351px);
  height: 100%;
  box-shadow: 0px 1px 6px rgba(54, 65, 102, 0.2), 0px 0px 26px rgba(54, 65, 102, 0.1);
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 24px;
  }
`

export const CertificateHeaderUserIconGif = styled.img`
  width: 75%;
  height: 75%;
`

export const CertificateBody = styled.div`
  display: flex;
  flex-direction: column;
  color: #364166;
`

export const CertificateBodyScore = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 42px;
  border-bottom: 2px solid #3375DB;
`

export const CertificateScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #3375DB;
`

export const CertificateScoreHeaderTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #3375DB;
`

export const CertificateBodyData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CertificateBodyUser = styled.div`
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CertificateBodyUserTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: ${props => (props.header ? '600' : props.mod ? '600' : '400')};
  color: ${props => (props.header ? '#3375DB' : '#364166')};
  padding-top: ${props => (props.header ? '0px' : '10px')};
  padding-bottom: ${props => (props.header ? '4px' : '0px')};
  border-bottom: ${props => (props.header ? '1px solid #3375DB' : 'none')};
`

export const CertificateBodyMod = styled.div`
  width: 6.5%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const CertificateBodyIssue = styled.div`
  width: 78%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const CertificateBodyQualification = styled.div`
  width: 15%;
`

export const CertificateBodyLeft = styled.div`
  width: 26%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CertificateBodyRight = styled.div`
  width: 74%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 57px;
  }
`

export const CertificateBodyRightItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const CertificateBodyUserItem = styled.div`
  margin-top: 15px;
`

export const CertificateBodyUserItemTitle = styled.p`
  margin: 0;
  text-align: left;
  font-size: 14px;
  margin-bottom: 2px;
`

export const CertificateBodyUserItemText = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`

export const CertificateBodyNext = styled.div`
  margin: 52px 0px 0px 0px;
`

export const CertificateBodyNextTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`
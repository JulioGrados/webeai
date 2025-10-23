import styled from 'styled-components'

export const FooterIconDefault = styled.div`
  width: 20px;
  height: 18px;
`

export const FooterMain = styled.footer`
  margin-top: 130px;
  padding-bottom: 60px;
  border-bottom: 7px solid #0077e2;
`

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-around;
`

export const FooterLeft = styled.div`
  width: 40%;
  padding-right: 50px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FooterRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`

export const FooterLogo = styled.img`
  width: 190px;
`

export const FooterLine = styled.div`
  margin: 30px 0px 35px 0px;
  border: 1px solid #0077e2;
  width: 270px;
`

export const FooterDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const FooterMoney = styled.div`
  margin-top: 8px;
`

export const FooterMoneyTitle = styled.h4`
  font-size: 13px;
  font-weight: 500;
  margin: 0 0 5px 0;
  color: #5a6671;
`

export const FooterMoneySelect = styled.div`
  width: 240px;
`

export const FooterDateText = styled.p`
  font-size: 14px;
  padding-left: 10px;
  margin: 0px;
`
export const FooterDateLink = styled.a`
  font-size: 10px;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0px;
  color: #0077e2;
  padding-left: 7px;
  :hover {
    text-decoration: underline;
  }
`

export const FooterSecction = styled.div``

export const FooterSecctionTitle = styled.h3`
  color: #5a6671;
  font-weight: 700;
  font-size: 14px;
  margin: 0px 0px 20px 0px;
`

export const FooterSecctionItem = styled.a`
  margin: 0px 0px 15px 0px;
  color: #010101;
  font-size: 14px;
  display: block;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

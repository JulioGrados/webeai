import styled from 'styled-components'
import { BoxBody } from '../box/styles'

export const CheckoutDetail = styled.div`
  display: block;
  margin: 70px 0px;
  @media (max-width: 1024px) {
    margin-top: 70px;
    margin-bottom: 15px;
  }
`

export const CheckoutContent = styled.form`
  display: flex;
  height: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const CheckoutContentData = styled.div`
  margin-right: 25px;
  overflow-y: auto;
  width: 70%;
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const CheckoutContentTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`

export const CheckoutContentInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  :first-child {
    margin-top: 0px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`

export const CheckoutContentItem = styled.div`
  width: 49%;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: column;
  }
`

export const CheckoutContentLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.38);
  line-height: 28px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
`

export const CheckoutContentInput = styled.input`
  width: 100%;
  opacity: 1;
  margin: 0;
  padding: 16.5px 14px;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 4px;
  letter-spacing: 0.2px;
  font-family: 'Montserrat', sans-serif;
  ::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`

export const CheckoutPayment = styled.div`
  margin-top: 10px;
  @media (max-width: 1024px) {
    display: none;
  }

`

export const CheckoutPaymentButton = styled.div`
  margin-top: 30px;
  @media (max-width: 1024px) {
    margin-top: 15px;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  line-height: 1.75;
  color: rgb(255, 255, 255);
  background-color: rgb(50, 114, 240);
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
  padding: 14px 16px;
  @media (max-width: 1024px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0px;
  }
`

export const CheckoutPaymentInfo = styled.div`
  display: flex ;
  width: 100%;
`

export const CheckoutPaymentInfoLeft = styled.p`
  width: 50%;
  text-align: left;
  margin: 0;
  font-weight: ${props => (props.bold ? '600' : '400')};
`

export const CheckoutPaymentInfoRight = styled.p`
  width: 50%;
  margin: 0;
  text-align: right;
  font-weight: ${props => (props.bold ? '600' : '400')};
`

export const CheckoutPaymentTerms = styled.div`
  border-top: 1px solid #c4cdd5;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  margin-top: 20px;
  padding-top: 15px;
  text-align: left;
`

export const CheckoutContentInfo = styled.div`
  overflow: hidden;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const CheckoutContentInfoAmount = styled(BoxBody)`
  margin-top: 15px;
  @media (max-width: 1024px) {
    display: none;
  }
`

export const CheckoutContentError = styled.div`
  border: 1px solid #c02038;
  color: #c02038;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
`

export const CompletStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const CompletHeder = styled.div`
  text-align: center;
  width: 100%;
`

export const CompletTitle = styled.h3`
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
`

export const CompletText = styled.span`
  display: block;
  margin: 10px 0;
  text-align: center;
`

export const CompletAmount = styled.h1`
  font-size: 24px;
  margin: 0 auto;
  text-align: center;
`

export const CompletStatus = styled.div`
  background-color: ${props => props.status === 'PAID' ? '#25D366' : props.status === 'PENDING' ? '#FFAF00' : '#D0021B' };
  padding: 8px 16px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  border-radius: 3px;
  margin: 10px 0;
`

export const CompletBody = styled.div`
  border-top: 1px solid #eaeaea;
  display: flex;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CompletBodySection = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CompletBodyItem = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 15px;
`

export const CompletBodyItemTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 400;
`

export const CompletBodyItemText = styled.span`
  display: block;
  font-size: 13px;
  margin-top: 3px;
`

export const CompletDetail = styled(BoxBody)`
  margin: 70px 0px;
`

export const FixedHeader = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(105, 106, 119, 0.1);
  box-shadow: rgb(105 106 119 / 10%) 0px 2px 4px 0px;
`

export const FixedHeaderMain = styled.header`
  height: 104px;
  width: 100%;
  background-color: #fff;
  z-index: 3;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(105, 106, 119, 0.1);
  display: flex;
  flex-direction: column;
`

export const FixedHeaderCenter = styled.div`
  /* max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const FixedHeaderContentCenter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  /* box-shadow: rgb(105 106 119 / 10%) 0px 2px 4px 0px; */
  background-color: #fff;
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const FixedHeaderLogo = styled.img`
  width: 110px;
  height: 64px;
  cursor: pointer;
  flex-shrink: 0;
`

export const FixedHeaderPrice = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  height: 48px;
  display: none;
  box-shadow: rgb(105 106 119 / 10%) 0px 2px 4px 0px;
  background-color: #fff;
  @media (max-width: 1024px) {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid  #f1f1f1;
  }
`

export const FixedHeaderPriceText = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`

export const FixedHeaderPriceAmount = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  text-align: right;
`

export const FooterFix = styled.div`
  z-index: 3;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(105 106 119 / 10%);
  box-shadow: rgb(105 106 119 / 10%) 0px 2px 4px 4px;
  background-color: #fff;
  @media (max-width: 1024px) {
    position: initial;
    margin-bottom: 52.5px;
    border-top: 0px;
    box-shadow: none;
    height: 60px;
  }
`

export const FooterFixContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
`

export const FooterFixCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FooterInfoText = styled.span`
  display: block;
  margin-left: 15px;
  margin-top: 2px;
  font-weight: 500;
  font-size: 12px;
`

export const FooterImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%
  }
`

export const FooterImagesItem = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
`

export const FooterImg = styled.img`
  display: inline-block;
`
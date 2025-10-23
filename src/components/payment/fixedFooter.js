import {
  FooterFix,
  FooterFixContainer,
  FooterFixCenter,
  FooterInfo,
  FooterInfoText,
  FooterImages,
  FooterImagesItem,
  FooterImg
} from './styles'
import { IconPadLock } from './iconPadLock'

const FixedFooter = ({country}) => {

  return (
    <FooterFix>
      <FooterFixContainer>
        <FooterFixCenter>
          <FooterInfo>
            <IconPadLock />
            <FooterInfoText>
              Su pago está protegido por encriptación SSL. Estás seguro.
            </FooterInfoText>
          </FooterInfo>
        </FooterFixCenter>
      </FooterFixContainer>
    </FooterFix>
  )
}

export default FixedFooter

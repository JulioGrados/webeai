import Article from '../article'
import { MEDIA_PATH } from 'utils/files/path'

import { AgreementItemImg, AgreementContainer, AgreementText } from './styles'

const DetailAgrement = ({ institution, description, image }) => (
  <Article title={institution}>
    <AgreementContainer>
      <AgreementItemImg align src={MEDIA_PATH + image} />
      <AgreementText>{description}</AgreementText>
    </AgreementContainer>
  </Article>
)

export default DetailAgrement

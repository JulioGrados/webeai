import { DetailAgreement, UndefindAgreement } from '../../components'
import GetAgreements from '../../hocs/getAgreements'

const Agrement = ({ slug }) => (
  <GetAgreements slug={slug}>
    {({ agreement, loading }) => {
      if (loading) {
        return <span>cargando...</span>
      }
      if (!agreement) {
        return <UndefindAgreement />
      }
      return <DetailAgreement {...agreement} />
    }}
  </GetAgreements>
)

export default Agrement

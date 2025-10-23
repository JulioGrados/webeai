import { ListAgreements } from '../../components'
import GetAgreements from '../../hocs/getAgreements'

const AgrementsList = ({ all = false, setHome }) => (
  <GetAgreements>
    {props => <ListAgreements {...props} all={all} setHome={setHome} />}
  </GetAgreements>
)

export default AgrementsList

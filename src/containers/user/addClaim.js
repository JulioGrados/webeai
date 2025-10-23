import { ClaimForm } from '../../components'

import { addClaim } from '../../redux/user'
import { useReduxAdd, useReduxState } from '../../hooks/redux'

const CreateClaim = () => {
  const { loading, error } = useReduxState('user')
  const createUser = useReduxAdd(addClaim)

  const handleSubmit = (data, callback) => {
    console.log('data', data)
    createUser(data, callback)
  }

  return <ClaimForm loading={loading} error={error} onSubmit={handleSubmit} />
}

export default CreateClaim

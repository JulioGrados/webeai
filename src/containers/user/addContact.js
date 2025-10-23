import { ContactForm } from '../../components'

import { addContact } from '../../redux/user'
import { useReduxAdd, useReduxState } from '../../hooks/redux'

const CreateContact = () => {
  const { loading, error } = useReduxState('user')
  const createUser = useReduxAdd(addContact)

  const handleSubmit = (data, callback) => {
    createUser(data, callback)
  }

  return <ContactForm loading={loading} error={error} onSubmit={handleSubmit} />
}

export default CreateContact

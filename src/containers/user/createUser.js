import { UserForm } from '../../components'

import { addOrUpdateUser, addOrUpdateUserRegister } from '../../redux/user'
import { useReduxAdd, useReduxState } from '../../hooks/redux'
import { dataToPayload } from 'utils/functions/user'
import Router from 'next/router'
import UserRegisterForm from '../../components/forms/userRegister'
import { createOrUpdateUserRegister } from 'utils/api/users'
import { useState } from 'react'

const CreateUser = ({ course, width }) => {
  const { loading, error } = useReduxState('user')
  const [bug, setBug] = useState()
  const createUser = useReduxAdd(addOrUpdateUser)
  const createUserRegister = useReduxAdd(addOrUpdateUserRegister)

  const handleSubmit = (data, callback) => {
    const success = () => {
      callback && callback()
      Router.push('/gracias/[slug]', `/gracias/${data.course.slug}`)
    }
    createUser(dataToPayload(data), success)
  }

  const handleSubmitRegister = async (data, callback) => {
    const save = await createOrUpdateUserRegister(data)
    console.log('save', save)
    if (save.success) {
      callback && callback()
      Router.push('/gratuito/[slug]', `/gratuito/${save._id}`)
    } else {
      setBug(save.message)
    }
  }

  return (
    <>
      {
        course && course.isConfirmation ?
          <UserRegisterForm
            loading={loading}
            error={bug}
            onSubmit={handleSubmitRegister}
            course={course}
            width={width}
          /> :
          <UserForm
            loading={loading}
            error={error}
            onSubmit={handleSubmit}
            course={course}
            width={width}
          />
      }
    </>
  )
}

export default CreateUser

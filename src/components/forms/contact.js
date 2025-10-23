import { useRef, useState } from 'react'
import { useStateData } from '../../hooks'
import { NotificationForm } from './notification'

import {
  ContactForm,
  ContactInputs,
  ContactInput,
  ContactTextArea,
  ContactButton,
  ContactContentForm,
  NotificationContact
} from './styles'

const Contact = ({ loading, onSubmit }) => {
  const { data, changeData, cleanData } = useStateData()
  const [alert, changeAlert] = useState(false)
  const form = useRef(null)

  const messageSuccess = () => {
    changeAlert(true)
    setTimeout(() => {
      changeAlert(false)
    }, 5 * 1000)
  }

  const handleSuccess = () => {
    messageSuccess()
    cleanData()
    form.current.reset()
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(data, handleSuccess)
  }

  return (
    <ContactContentForm>
      <ContactForm onSubmit={handleSubmit} ref={form}>
        <ContactInputs>
          <ContactInput
            contact={true}
            required={true}
            placeholder='Nombres y Apellidos *'
            type='text'
            value={data.names}
            onChange={value => changeData('names', value)}
          />
          <ContactInput
            contact={true}
            required={true}
            placeholder='Correo Electrónico *'
            type='text'
            value={data.email}
            onChange={value => changeData('email', value)}
          />
          <ContactInput
            contact={true}
            required={true}
            placeholder='Asunto *'
            type='text'
            value={data.affair}
            onChange={value => changeData('affair', value)}
          />
        </ContactInputs>
        <ContactTextArea
          name=''
          placeholder='Mensaje *'
          id=''
          cols='30'
          rows='10'
          value={data.message}
          onChange={value => changeData('message', value)}
        ></ContactTextArea>
        <ContactButton isDisabled={loading} type='submit'>
          {loading && <span>...</span>}Enviar
        </ContactButton>
      </ContactForm>
      <NotificationContact>{alert && <NotificationForm />}</NotificationContact>
    </ContactContentForm>
  )
}

export default Contact

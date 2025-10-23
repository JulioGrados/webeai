import { useRef, useState } from 'react'
import { useStateData } from '../../hooks'
import { NotificationForm } from './notification'
import { SelectForm } from './select'
import {
  ContactForm,
  ContactInputs,
  ContactInput,
  ContactTextArea,
  ContactButton,
  ContactContentForm,
  NotificationContact,
  ClaimsSectionTitle
} from './styles'

const Claim = ({ loading, onSubmit }) => {
  const { data, changeData, cleanData } = useStateData()
  const [alert, changeAlert] = useState(false)
  const form = useRef(null)
  const [value, setValue] = useState('Reclamo')
  const options = ['Reclamo', 'Queja']

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

  const handleSelectOption = option => {
    setValue(option.value)
    changeData('option', option.value)
  }

  return (
    <ContactContentForm>
      <ContactForm onSubmit={handleSubmit} ref={form}>
        <ClaimsSectionTitle>Información del consumidor reclamante:</ClaimsSectionTitle>
        <ContactInputs claim>
          <ContactInput
            contact={true}
            required={true}
            placeholder='Nombres'
            type='text'
            value={data.firstName}
            onChange={value => changeData('firstName', value)}
          />
          <ContactInput
            contact={true}
            required={true}
            placeholder='Apellidos'
            type='text'
            value={data.lastName}
            onChange={value => changeData('lastName', value)}
          />
          <ContactInput
            contact={true}
            required={true}
            placeholder='Correo electrónico'
            type='text'
            value={data.email}
            onChange={value => changeData('email', value)}
          />
        </ContactInputs>
        <ContactInputs>
          <ContactInput
            contact={true}
            required={true}
            placeholder='DNI'
            type='text'
            value={data.dni}
            onChange={value => changeData('dni', value)}
          />
          <ContactInput
            contact={true}
            required={true}
            placeholder='Dirección'
            type='text'
            value={data.address}
            onChange={value => changeData('address', value)}
          />
          <ContactInput
            contact={true}
            required={true}
            placeholder='Teléfono'
            type='text'
            value={data.mobile}
            onChange={value => changeData('mobile', value)}
          />
        </ContactInputs>
        <ClaimsSectionTitle>Detalle de la reclamación:</ClaimsSectionTitle>
        <SelectForm values={options} value={value} onSelect={handleSelectOption} />
        <ContactTextArea
          name=''
          placeholder='Detalle'
          id=''
          cols='30'
          rows='10'
          value={data.detail}
          onChange={value => changeData('detail', value)}
        ></ContactTextArea>
        <ContactTextArea
          name=''
          placeholder='Pedido'
          id=''
          cols='30'
          rows='10'
          value={data.order}
          onChange={value => changeData('order', value)}
        ></ContactTextArea>
        <ContactButton isDisabled={loading} type='submit'>
          {loading && <span>...</span>}Enviar
        </ContactButton>
      </ContactForm>
      <NotificationContact>{alert && <NotificationForm />}</NotificationContact>
    </ContactContentForm>
  )
}

export default Claim

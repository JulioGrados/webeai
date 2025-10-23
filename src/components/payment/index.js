import { useRef, useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Box } from '../box'
import { createChargedLocal } from 'utils/api/charge'
import { 
  CheckoutDetail,
  CheckoutContent, 
  CheckoutContentData,
  CheckoutContentTitle,
  CheckoutContentInputs,
  CheckoutContentItem,
  CheckoutContentLabel,
  CheckoutContentInput,
  CheckoutPayment,
  CheckoutPaymentInfo,
  CheckoutContentInfoAmount,
  CheckoutPaymentInfoLeft,
  CheckoutPaymentInfoRight,
  CheckoutPaymentButton,
  CheckoutPaymentTerms,
  CheckoutButton,
  CheckoutContentInfo,
  CheckoutContentError
} from './styles'
import { SelectDocument } from '../selectDocument'
import { useStateData } from '../../hooks'

const Payment = ({ onSubmit, error }) => {
  
  const documents = [
    {
      name: 'Cedula ciudadana',
      code: 'CC'
    },
    {
      name: 'Carné de Extranjería',
      code: 'CE'
    },
    {
      name: 'NIT',
      code: 'NIT'
    },
    {
      name: 'Pasaporte',
      code: 'PASS'
    }
  ]

  const [userData, setUserData] = useLocalStorage('payment', {
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    document: 'CC'
  })

  const { data, changeData, cleanData, change, changeDatas } = useStateData(
    userData
  )

  const form = useRef(null)

  useEffect(() => {
    change(userData)
  }, [userData])

  const handleSuccess = () => {
    // messageSuccess()
    cleanData()
    form.current.reset()
    change(userData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const storage = {
      ...data,
      currency: 'COP',
      country: 'CO',
      symbol: '$',
      amount: 130000
    }
    onSubmit(storage, handleSuccess)
  }

  const handleSelectDocument = (document) => {
    changeData('document', document.label)
  }

  return (
    <>
      <CheckoutDetail>
        {
          error && (
            <CheckoutContentError>
              Error: {error}
            </CheckoutContentError>
          )
        }
        <CheckoutContentTitle>Información del cliente:</CheckoutContentTitle>
        <CheckoutContent ref={form} onSubmit={handleSubmit} >
          <CheckoutContentData>
            <Box>
              <CheckoutContentInputs>
                <CheckoutContentItem>
                  <CheckoutContentLabel>Primer nombre</CheckoutContentLabel>
                  <CheckoutContentInput
                    placeholder='Primer nombre'
                    type='text'
                    required={true}
                    value={data.firstNameOne}
                    onChange={value => changeData('firstNameOne', value.target.value)}
                  />
                </CheckoutContentItem>
                <CheckoutContentItem>
                  <CheckoutContentLabel>Segundo nombre</CheckoutContentLabel>
                  <CheckoutContentInput
                    placeholder='Segundo nombre'
                    type='text'
                    required={false}
                    value={data.firstNameTwo}
                    onChange={value => changeData('firstNameTwo', value.target.value)}
                  />
                </CheckoutContentItem>
              </CheckoutContentInputs>
              <CheckoutContentInputs>
                <CheckoutContentItem>
                  <CheckoutContentLabel>Apellidos completos</CheckoutContentLabel>
                  <CheckoutContentInput
                    placeholder='Apellidos'
                    type='text'
                    required={true}
                    value={data.lastName}
                    onChange={value => changeData('lastName', value.target.value)}
                  />
                </CheckoutContentItem>
                <CheckoutContentItem>
                  <CheckoutContentLabel>Tipo de Documento</CheckoutContentLabel>
                  <SelectDocument
                    value={data.document}
                    onSelect={handleSelectDocument}
                    name='document'
                    documents={documents}
                  />
                </CheckoutContentItem>
              </CheckoutContentInputs>
              <CheckoutContentInputs>
                <CheckoutContentItem>
                  <CheckoutContentLabel>Documento</CheckoutContentLabel>
                  <CheckoutContentInput
                    placeholder='Documento'
                    type='text'
                    required={true}
                    value={data.dni}
                    onChange={value => changeData('dni', value.target.value)}
                  />
                </CheckoutContentItem>
                <CheckoutContentItem>
                  <CheckoutContentLabel>Correo Electrónico</CheckoutContentLabel>
                  <CheckoutContentInput
                    placeholder='Correo Electrónico'
                    type='email'
                    required={true}
                    value={data.email}
                    onChange={value => changeData('email', value.target.value)}
                  />
                </CheckoutContentItem>
              </CheckoutContentInputs>
            </Box>
          </CheckoutContentData>
          <CheckoutContentInfo>
            <CheckoutContentInfoAmount>
              Pago de $. 130000 COP
            </CheckoutContentInfoAmount>
            <CheckoutPayment>
              <Box>
                <CheckoutPaymentInfo>
                  <CheckoutPaymentInfoLeft>
                    Monto
                  </CheckoutPaymentInfoLeft>
                  <CheckoutPaymentInfoRight>
                    COP 130000 COP
                  </CheckoutPaymentInfoRight>
                </CheckoutPaymentInfo>
              </Box>
              <Box>
                <CheckoutPaymentInfo>
                  <CheckoutPaymentInfoLeft bold>
                    Monto a pagar
                  </CheckoutPaymentInfoLeft>
                  <CheckoutPaymentInfoRight bold>
                    COP 130000 COP
                  </CheckoutPaymentInfoRight>
                </CheckoutPaymentInfo>
              </Box>
            </CheckoutPayment>
            <CheckoutPaymentButton>
              <CheckoutButton type='submit'>
                Confirmar Pago
              </CheckoutButton>
            </CheckoutPaymentButton>
            <CheckoutPaymentTerms>
              Al hacer clic en 'Confirmar pago', aceptas los términos y condiciones del servicio.
            </CheckoutPaymentTerms>
          </CheckoutContentInfo>
        </CheckoutContent>
      </CheckoutDetail>
    </>
  )
}

export default Payment
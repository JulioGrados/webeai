import Link from 'next/link'
import {
  ErrorTitle,
  ErrorSubTitle,
  ErrorText,
  ErrorBtn
} from '../error/styles'

import {
  SectionCourse,
  SectionTitle,
  ListFeatures,
  FeaturesItem,
  FeaturesText,
  ThanksTitle,
  ThanksBtn
} from './styles'

import { useEffect } from 'react'
import { updateOpenConfirmation } from 'utils/api/confirmations'


export const ActivationPage = ({ course, user, confirmation }) => {
  useEffect(() => {
    const fetchCourse = async () => {
      if (confirmation && !confirmation.isConfirmation) {
        const save = await updateOpenConfirmation(confirmation._id, { isConfirmation: true })
      }
    }
    fetchCourse()
  }, [confirmation])
  
  return (
    <>
      {
        confirmation && confirmation.isConfirmation === false ?
          <>
            <ThanksTitle>¡Felicitaciones!</ThanksTitle>
            <br/>
            <FeaturesText isThanks center>Tu registro al {course.name} ha sido exitoso, <strong>hemos enviado tus credenciales de acceso a tu correo {user.email}</strong>. Revisa tu correo e inicia este increíble curso.</FeaturesText>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </> :
          <>
            {
              confirmation._id ?
                <>
                  Tu cuenta ya ha sido confirmada.
                </> :
                <>
                  <ErrorTitle>404</ErrorTitle>
                  <ErrorSubTitle>OPSS!</ErrorSubTitle>
                  <ErrorText>
                    No encontramos lo que estas buscando, podrías ir a la página
                    de inicio.
                  </ErrorText>
                  <Link href='/'>
                    <ErrorBtn>Inicio</ErrorBtn>
                  </Link>
                </>
            }
          </>
      }
    </>
  )
}

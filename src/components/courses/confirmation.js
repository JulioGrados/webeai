import Link from 'next/link'
import Payment from './payment'

import {
  SectionCourse,
  SectionTitle,
  ListFeatures,
  FeaturesItem,
  FeaturesText,
  ThanksTitle,
  ThanksBtn
} from './styles'
import { IconCheck } from './iconCheck'
import { MEDIA_PATH } from 'utils/files/path'

export const Confirmation = ({ course, user }) => {
  console.log('user', user)
  return (
    <>
      <ThanksTitle>Información del registro</ThanksTitle>
      <br />
      <FeaturesText isThanks center>¡Gracias por registrarte! Te hemos enviado un correo electrónico a <strong>{user.email}</strong> con los accesos para el {course.name}, <strong>tienes 5 minutos para activar tu acceso</strong>.</FeaturesText>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

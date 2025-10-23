import { IconCheck } from './iconCheck'

import {
  NotificationFormUp,
  NotificationFormUpContent,
  NotificationFormUpLine,
  NotificationFormUpCircle,
  NotificationFormUpIcon,
  NotificationFormUpMenssage
} from './styles'

export const NotificationForm = ({ title, message }) => {
  return (
    <NotificationFormUp>
      <NotificationFormUpContent>
        <NotificationFormUpIcon>
          <NotificationFormUpLine></NotificationFormUpLine>
          <NotificationFormUpCircle>
            <IconCheck />
          </NotificationFormUpCircle>
        </NotificationFormUpIcon>
        <NotificationFormUpMenssage>
          <strong>Gracias por su mensaje</strong>
          <span>Recibiras más información en breve.</span>
        </NotificationFormUpMenssage>
      </NotificationFormUpContent>
    </NotificationFormUp>
  )
}

export default NotificationForm

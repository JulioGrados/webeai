import {
  SectionCourse,
  SectionTitle,
  SectionText,
  LinkPayment,
  PaymentList,
  PaymentItem,
  PaymentItemImg,
  PaymentItemText
} from './styles'
import { usePayments } from '../../hooks'

const Payment = ({ price, isThanks = '' }) => {
  const { payments } = usePayments()
  const payment = payments.find(pay => pay.amount === price)
  const url = payment && payment.url
  return (
    <SectionCourse isThanks={isThanks}>
      <SectionTitle isThanks={isThanks}>Formas de Pago</SectionTitle>
      {url && (
        <SectionText>
          Pago online con tarjeta de crédito o débito (S/.{price} por un
          estudiante):{' '}
          <LinkPayment target='_blank' href={url}>
            Pagar ahora S/.{price}.
          </LinkPayment>
        </SectionText>
      )}
      <PaymentList isThanks={isThanks}>
        <PaymentItem>
          <PaymentItemImg src='/static/img/bcp.png' />
          <PaymentItemText>
            Depósito o transferencia directa a Cuenta Corriente BCP Soles:
            570-2495897-0-53.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/cci.png' />
          <PaymentItemText>
            Transferencia desde cualquier banco usando el CCI (Código de cuenta
            interbancario): 00257000249589705305.
          </PaymentItemText>
        </PaymentItem>
        <PaymentItem>
          <PaymentItemImg src='/static/img/paypal.png' />
          <PaymentItemText>También aceptamos pagos por PayPal.</PaymentItemText>
        </PaymentItem>
      </PaymentList>
    </SectionCourse>
  )
}

export default Payment

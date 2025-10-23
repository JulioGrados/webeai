import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import moment from 'moment'
import { 
  CompletStyle,
  CompletDetail,
  CompletHeder,
  CompletTitle,
  CompletText,
  CompletAmount,
  CompletStatus,
  CompletBody,
  CompletBodySection,
  CompletBodyItem,
  CompletBodyItemTitle,
  CompletBodyItemText
} from './styles'

const Complet = ({ charge }) => {
  console.log('charge', charge)
  return (
    <>
      <CompletStyle>
        <CompletDetail>
          <CompletHeder>
            <CompletTitle>¡Pago exitoso!</CompletTitle>
            <CompletText>Monto enviado</CompletText>
            <CompletAmount>{charge.symbol}. {charge.amount}.00 {charge.money}</CompletAmount>
            <CompletStatus status={charge.status}>
              {
                charge.status === 'PENDING' ? ' Pendiente' : (charge.status === 'PAID' ? ' Completado' : (charge.status === 'EXPIRED' ? ' Expirado' :  (charge.status === 'CANCELLED' ? ' Cancelado': ' -')))
              }
            </CompletStatus>
          </CompletHeder>
          <CompletBody>
            <CompletBodySection>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  Fecha
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {moment(charge.createdAt).format('DD/MM/YYYY')}
                </CompletBodyItemText>
              </CompletBodyItem>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  País
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {getUnicodeFlagIcon(charge.country)}
                </CompletBodyItemText>
              </CompletBodyItem>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  Monto local
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {charge.money} {charge.amount}
                </CompletBodyItemText>
              </CompletBodyItem>
            </CompletBodySection>
            <CompletBodySection>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  Hora
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {moment(charge.createdAt).format('HH:mm:ss')}
                </CompletBodyItemText>
              </CompletBodyItem>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  OP
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {charge._id}
                </CompletBodyItemText>
              </CompletBodyItem>
            </CompletBodySection>
          </CompletBody>
          <CompletBody>
            <CompletBodySection>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  Nombre del cliente
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {charge.payer.firstName} {charge.payer.lastName}
                </CompletBodyItemText>
              </CompletBodyItem>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  ID de cliente
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {charge.paymentMethodId}
                </CompletBodyItemText>
              </CompletBodyItem>
            </CompletBodySection>
            <CompletBodySection>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  Documento de Identidad
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {charge.payer.document} {charge.payer.dni} 
                </CompletBodyItemText>
              </CompletBodyItem>
              <CompletBodyItem>
                <CompletBodyItemTitle>
                  Correo electrónico
                </CompletBodyItemTitle>
                <CompletBodyItemText>
                  {charge.payer.email}
                </CompletBodyItemText>
              </CompletBodyItem>
            </CompletBodySection>
          </CompletBody>
        </CompletDetail>
      </CompletStyle>
      {/* <CheckoutDetail>
        <CheckoutContentTitle>Hola <strong>{charge.payer.firstName} {charge.payer.lastName}</strong>, tu solicitud se encuentra
          {
            charge.status === 'PENDING' ? ' Pendiente.' : (charge.status === 'PAID' ? ' Pagado.' : (charge.status === 'EXPIRED' ? ' Expirado.' :  (charge.status === 'CANCELLED' ? ' Cancelado.': ' -')))
          }
        </CheckoutContentTitle>
        <CheckoutPaymentInfo>
          Toma un pantallazo o foto de este voucher y envíalo a una de nuestras asesoras de Escuela Americana de Innovación por WhatsApp al +514800022 para registrar tu pago, emitirte un comprobante de pago y activar tus accesos.
        </CheckoutPaymentInfo>
      </CheckoutDetail> */}
    </>
  )
}

export default Complet
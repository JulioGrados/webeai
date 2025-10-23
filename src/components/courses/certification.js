import { SectionCourse, SectionTitle, SectionText } from './styles'

const Certification = ({ course, certificate, isConfirmation }) => {
  let band = false
  if (certificate === 'Escuela Americana de Innovación') {
    band = true
  }
  return (
    <SectionCourse>
      <SectionTitle>Certificación</SectionTitle>
      <SectionText>
        {
          isConfirmation ?
            <>
              Al día siguiente de haber finalizado satisfactoriamente el "{course}" te emitiremos un CERTIFICADO digital.
            </> :
            <>
              Una vez finalizado satisfactoriamente el "{course}", Escuela Americana de Innovación emite un CERTIFICADO, a nombre {band ? 'de':'del'}{' '} <strong>{certificate}</strong>
            </>
        }
      </SectionText>
    </SectionCourse>
  )
}

export default Certification

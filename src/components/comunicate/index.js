import {
  SectionBlue,
  ComunicateMain,
  ComunicateText,
  ComunicateTitle,
  ComunicateBtn,
  ComunicateIcon
} from './styles'

import { Container } from '../../styles/main'

const Comunicate = () => (
  <SectionBlue>
    <Container>
      <ComunicateMain>
        <ComunicateTitle>¿deseas comunicarte con nosotros?</ComunicateTitle>
        <ComunicateText>
          Recibe una atención directa por una asesora y resuelve tus dudas o
          consultas
        </ComunicateText>
        <ComunicateBtn href='tel:014800022'>
          <ComunicateIcon />
            Llámanos
        </ComunicateBtn>
      </ComunicateMain>
    </Container>
  </SectionBlue>
)

export default Comunicate

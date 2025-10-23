import {
  SloganMain,
  SloganContainer,
  SloganLeft,
  SloganText,
  SloganTextBlue,
  SloganRight,
  SloganData,
  SloganDataNumber,
  SloganDataText
} from './styles'

const Slogan = ({ teachers, courses }) => (
  <SloganMain>
    <SloganContainer>
      <SloganLeft>
        <SloganText>Formamos los</SloganText>
        <SloganTextBlue>Profesionales del Futuro</SloganTextBlue>
      </SloganLeft>
      <SloganRight>
        <SloganData>
          <SloganDataNumber>+20000</SloganDataNumber>
          <SloganDataText>Alumnos</SloganDataText>
        </SloganData>
        <SloganData>
          <SloganDataNumber>+{courses}</SloganDataNumber>
          <SloganDataText>Cursos</SloganDataText>
        </SloganData>
        <SloganData>
          <SloganDataNumber>+{teachers}</SloganDataNumber>
          <SloganDataText>Docentes</SloganDataText>
        </SloganData>
      </SloganRight>
    </SloganContainer>
  </SloganMain>
)

export default Slogan

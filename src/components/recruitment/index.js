import {
  RecruitmentContainer,
  RecruitmentImg,
  RecruitmentItem,
  RecruitmentTitle,
  RecruitmentSubTitle,
  RecruitmentName,
  RecruitmentText
} from './styles'

const Recruitment = () => (
  <RecruitmentContainer>
    <RecruitmentImg src='/static/img/efe.jpg' alt='Efe' />
    <RecruitmentItem>
      <RecruitmentTitle>Grupo efe</RecruitmentTitle>
      <RecruitmentSubTitle>Jefe de Gestión Humana</RecruitmentSubTitle>
      <RecruitmentName>mg. sergio urbina</RecruitmentName>
      <RecruitmentText>
        EAI permite que los profesionales puedan actualizarse y adquirir nuevos
        conocimientos en su ámbito de acción e interés. Su propuesta innovadora
        en educación aprovechando la tecnología y la variedad de cursos
        especializados que ofrece, hace que su empresa sea una de las top en su
        rubro, enfocando su oferta siempre con las nuevas tendencias en el
        mercado laboral.
      </RecruitmentText>
    </RecruitmentItem>
  </RecruitmentContainer>
)

export default Recruitment

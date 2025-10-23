import { ContainerUndefind, UndefindCourse } from './styles'

const Undefind = ({ title }) => {
  return (
    <ContainerUndefind>
      <UndefindCourse>No se encontró el Curso "{title}"</UndefindCourse>
    </ContainerUndefind>
  );
}

export default Undefind
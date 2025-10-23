import WorkItem from './work'

import { IconCertificate } from './iconCertificate'
import { IconMaterial } from './iconMaterial'
import { IconVirtual } from './iconVirtual'

import { About } from './styles'

const ListWork = () => {
  return (
    <About>
      <WorkItem
        title='Certificación'
        text='Al aprobar exitosamente un curso enviamos gratuitamente hasta la puerta de tu casa un certificado físico avalado por un colegio profesional.'
        icon={<IconCertificate />}
      />
      <WorkItem
        title='Docentes'
        text='Plana docente de las mejores universidades y/o empresas del Perú con experiencia profesional en los temas enseñados.'
        icon={<IconMaterial />}
      />
    </About>
  )
}

export default ListWork

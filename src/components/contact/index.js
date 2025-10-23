import Item from './item'
import { IconPhone } from './iconPhone'
import { IconMessage } from './iconMessage'
import { IconUbication } from './iconUbication'
import { IconWhatsapp } from './iconWhatsapp'

import { AddContact } from '../../containers'

import {
  ContactText,
  ContactTitle,
  SectionContact,
  ContainerContact,
  ContactMain,
  ContactMainItem
} from './styles'

const Contact = () => (
  <>
    <SectionContact>
      <ContactTitle>Información de Contacto</ContactTitle>
      <ContactText>Estamos contentos por servirte</ContactText>
      <ContainerContact>
        <Item
          title='Teléfono:'
          info='(01)4800022'
          icon={<IconPhone />}
          tel
        />
        <Item
          title='WhatsApp:'
          info='+51 14800022'
          icon={<IconWhatsapp />}
          wpp
        />
        <Item
          title='Correo electrónico:'
          info='cursos@eai.edu.pe'
          icon={<IconMessage />}
        />
        <Item
          title='Dirección:'
          info='Calle Las Camelias 877, Oficina 302 - San Isidro - Lima'
          icon={<IconUbication />}
        />
      </ContainerContact>
    </SectionContact>
    <SectionContact>
      <ContactTitle>Enviar mensaje</ContactTitle>
      <ContactText>
        Tu correo electrónico no será publicado. Los campos requeridos están
        marcados.
      </ContactText>
      <AddContact />
    </SectionContact>
  </>
)

export default Contact

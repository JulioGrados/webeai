import { IconWhatsapp } from './iconWhatsapp'
import { IconPhone } from './iconPhone'
import {
  ResponsiveButtons,
  ResponsiveItemCall,
  ResponsiveItemComunicate,
  ResponsiveComunicate
} from './styles'

export const NavBar = () => {
  return (
    <ResponsiveButtons>
      <ResponsiveComunicate href='tel:014800022' color={'#0077e2'}>
        <IconPhone size='12px' color='#fff' />
        <ResponsiveItemCall>Llámanos</ResponsiveItemCall>
      </ResponsiveComunicate>
      <ResponsiveComunicate
        href='https://wa.me/5114800022'
        target='_blank'
        color={'#25d366'}
      >
        <IconWhatsapp size='12px' color='#fff' />
        <ResponsiveItemComunicate>Escríbenos</ResponsiveItemComunicate>
      </ResponsiveComunicate>
    </ResponsiveButtons>
  )
}

import {
  ItemContact,
  ItemTitle,
  ItemInfo,
  IconContact,
  InfoContact
} from './styles'

const Item = ({ title, info, icon, main = false, wpp = false, tel = false }) => (
  <ItemContact main={main}>
    <IconContact>{icon}</IconContact>
    <InfoContact>
      <ItemTitle>{title}</ItemTitle>
      {
        tel ? <a href='tel:014800022'>{info}</a> : wpp ? <a href='https://wa.me/5114800022' target='_blank'>+51 14800022</a> : <ItemInfo>{info}</ItemInfo>
      }
    </InfoContact>
  </ItemContact>
)

export default Item

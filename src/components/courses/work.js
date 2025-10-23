import {
  AboutItem,
  AboutItemCircle,
  AboutItemTitle,
  AboutItemText
} from './styles'

const WorkItem = ({ title, text, icon }) => {
  return (
    <AboutItem>
      {icon}
      <AboutItemTitle>{title}</AboutItemTitle>
      <AboutItemText>{text}</AboutItemText>
    </AboutItem>
  )
}

export default WorkItem

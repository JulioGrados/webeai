import { SectionCourse, SectionTitle, ListTemary } from './styles'

import { TemaryItem } from './temaryItem'

const Temary = ({ lessons }) => {
  return (
    <SectionCourse>
      <SectionTitle>Temario</SectionTitle>
      <ListTemary>
        {lessons.map((lesson, idx) => (
          <TemaryItem key={lesson._id} {...lesson} number={idx + 1} />
        ))}
      </ListTemary>
    </SectionCourse>
  )
}

export default Temary

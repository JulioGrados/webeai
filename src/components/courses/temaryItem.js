import {
  ListTemaryItem,
  ListTemaryItemHeader,
  ListTemaryItemBody,
  ListClass,
  TitleModule,
  TitleClass,
  LinkVideo
} from './styles'

import { IconArrow } from './iconArrow'
import { IconDown } from './iconDown'
import { useState } from 'react'

export const TemaryItem = ({ name, number, chapters }) => {
  const [show, setShow] = useState(false)

  return (
    <ListTemaryItem onClick={() => setShow(!show)}>
      <ListTemaryItemHeader>
        <TitleModule>
          Módulo {number}: {name}
        </TitleModule>
        {show ? <IconArrow /> : <IconDown />}
      </ListTemaryItemHeader>
      <ListTemaryItemBody show={show}>
        {chapters.map((chapter, idx) => (
          <ListClass key={idx}>
            <TitleClass>
              Clase {idx + 1}: {chapter.name}
            </TitleClass>
            <LinkVideo>Video</LinkVideo>
          </ListClass>
        ))}
      </ListTemaryItemBody>
    </ListTemaryItem>
  )
}

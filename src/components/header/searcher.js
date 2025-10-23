import Search from './search'

import { HeaderMainIconSearch, HeaderItemSearch, Headersearch } from './styles'

import { useState } from 'react'

export const ItemSearcher = ({ showWhite }) => {
  const [visible, setVisible] = useState(true)
  return (
    <Headersearch transparent={showWhite}>
      <HeaderItemSearch onClick={() => setVisible(!visible)} visible={visible}>
        <HeaderMainIconSearch color={showWhite ? '#fff' : '#010101'} />
      </HeaderItemSearch>
      <Search
        transparent={showWhite}
        visible={visible}
        setBlur={blur => setVisible(blur)}
      />
    </Headersearch>
  )
}

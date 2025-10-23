import { SearchContent, SearchInput } from './styles'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

const Search = ({ transparent, visible, setBlur }) => {
  const [text, setText] = useState('')
  const input = useRef(null)
  const router = useRouter()
  const handleSearch = e => {
    if (e.key === 'Enter') {
      router.push(`/cursos/busqueda?search=${text}`)
      setText('')
      setBlur(true)
    }
  }
  useEffect(() => {
    if (!visible) {
      input.current.focus()
    }
  }, [visible])
  const handleBlur = e => {
    setBlur(true)
  }
  const icon = transparent ? '#fff' : '#010101'

  return (
    <SearchContent visible={visible}>
      <SearchInput
        ref={input}
        transparent={transparent}
        visible={visible}
        placeholder='Ingresa el curso de tu interes y pulsa enter para buscar'
        onKeyPress={handleSearch}
        value={text}
        onBlur={handleBlur}
        onChange={e => setText(e.target.value)}
      />
    </SearchContent>
  )
}

export default Search

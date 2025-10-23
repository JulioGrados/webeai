import { SearchCourse, ContainerSearch } from './styles'

const Search = ({ title }) => {
  return (
    <ContainerSearch>
      <SearchCourse>No se encontraron cursos similares a "{title}"</SearchCourse>
    </ContainerSearch>
  )
}

export default Search
import {
  Categories,
  CategoriesTitle,
  CategoriesList,
  CategoriesItem
} from './styles'
import { useCategories } from '../../hooks'
import { Label } from './label'

export const ListLabels = ({ label, slug, onChange }) => {
  const { categories, loading } = useCategories()
  if (loading) {
    return <span>cargando...</span>
  }
  return (
    <>
      <Categories>
        <CategoriesTitle>Filtro de Categorías</CategoriesTitle>
        <CategoriesList>
          <CategoriesItem selected={!label} onClick={() => onChange(null)}>
            Todas
          </CategoriesItem>
          {categories.map((label, idx) => (
            <Label key={idx} label={label} onChange={onChange} slug={slug} />
          ))}
        </CategoriesList>
        {/* <CategoriesButton href="">Llamanos gratis</CategoriesButton> */}
      </Categories>
    </>
  )
}

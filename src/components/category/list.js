import {
  Categories,
  CategoriesTitle,
  CategoriesList,
  CategoriesItem,
  CategoriesListSection,
  CategoriesListSectionName,
  CategoriesListSectionOption
} from './styles'
import { useLabels } from '../../hooks'

import { Label } from './label'

const CategoryList = ({
  categories,
  category,
  loading,
  onChange,
  showCategories
}) => {
  const { labels } = useLabels()

  if (loading) {
    return <span>cargando...</span>
  }

  const setCategories = showCategories && true

  return (
    <>
      <Categories>
        <CategoriesTitle>Filtro de Categorías</CategoriesTitle>
        <CategoriesList>
          <CategoriesListSection>
            <CategoriesListSectionName>Temas</CategoriesListSectionName>
            <CategoriesListSectionOption>
              Administración de empresas
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Alimentación y nutrición
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Análisis de datos y estadística
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Arquitectura
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Arte y curltura
            </CategoriesListSectionOption>
          </CategoriesListSection>
          <CategoriesListSection>
            <CategoriesListSectionName>Temas</CategoriesListSectionName>
            <CategoriesListSectionOption>
              Administración de empresas
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Alimentación y nutrición
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Análisis de datos y estadística
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Arquitectura
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Arte y curltura
            </CategoriesListSectionOption>
          </CategoriesListSection>
          <CategoriesListSection>
            <CategoriesListSectionName>Temas</CategoriesListSectionName>
            <CategoriesListSectionOption>
              Administración de empresas
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Alimentación y nutrición
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Análisis de datos y estadística
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Arquitectura
            </CategoriesListSectionOption>
            <CategoriesListSectionOption>
              Arte y curltura
            </CategoriesListSectionOption>
          </CategoriesListSection>
          {/* <CategoriesItem selected={!category} onClick={() => onChange(null)}>
            Todas
          </CategoriesItem>
          {labels.map((label, idx) => (
            <Label
              key={idx}
              {...label}
              category={category}
              onChange={onChange}
            />
          ))} */}
        </CategoriesList>
        {/* <CategoriesButton href="">Llamanos gratis</CategoriesButton> */}
      </Categories>
      {setCategories && (
        <Categories setCategories={setCategories}>
          <CategoriesList>
            <CategoriesItem selected={!category} onClick={() => onChange(null)}>
              Todas
            </CategoriesItem>
            {categories.map(item => (
              <CategoriesItem
                setCategories={setCategories}
                key={item._id}
                selected={category && category._id === item._id}
                onClick={() => onChange(item)}
              >
                {item.name}
              </CategoriesItem>
            ))}
          </CategoriesList>
        </Categories>
      )}
    </>
  )
}

export default CategoryList

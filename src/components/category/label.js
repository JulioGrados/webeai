import { CategoriesItem } from './styles'

export const Label = ({ label, slug, onChange }) => {
  return (
    <CategoriesItem
      selected={label && label.slug === slug}
      onClick={() => onChange(label.slug)}
    >
      {label.name}
    </CategoriesItem>
  )
}

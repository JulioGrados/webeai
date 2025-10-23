import { useEffect } from 'react'

import { ListCategories } from '../../components'
import { getCategories } from '../../redux/category'
import { useReduxState, useReduxFetch } from '../../hooks/redux'

const CategoryList = props => {
  const { list, loading } = useReduxState('category')
  const fetchCategories = useReduxFetch(getCategories)

  useEffect(() => {
    if (list.length === 0) {
      fetchCategories()
    }
  }, [])

  useEffect(() => {
    if (props.slug) {
      const category = list.find(
        item => item.name === props.slug || item.slug === props.slug
      )
      if (category) {
        props.onChange(category)
      }
    }
  }, [props.slug, list.length])

  return <ListCategories {...props} categories={list} loading={loading} />
}

export default CategoryList

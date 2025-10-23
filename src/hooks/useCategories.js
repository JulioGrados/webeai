import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCategories } from '../redux/category'

export const useCategories = () => {
  const { list, loading, loaded } = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(
        getCategories({
          sort: 'order'
        })
      )
    }
  }, [])

  const categories = list

  return {
    categories,
    loading,
    loaded
  }
}

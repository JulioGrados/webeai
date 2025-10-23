import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getLabels } from '../redux/label'

export const useLabels = () => {
  const { list, loading, loaded } = useSelector(state => state.label)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(
        getLabels({
          sort: 'order'
        })
      )
    }
  }, [])

  const labels = list

  return {
    labels,
    loading,
    loaded
  }
}

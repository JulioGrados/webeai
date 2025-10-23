import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMetas } from '../redux/meta'

export const useMetas = () => {
  const { list, loading, loaded } = useSelector(state => state.meta)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(
        getMetas({
          query: {
            domain: 'https://www.eai.edu.pe'
          }
        })
      )
    }
  }, [])

  console.log(list, list)

  const meta = list[0]

  return {
    meta,
    loading,
    loaded
  }
}

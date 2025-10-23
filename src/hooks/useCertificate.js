import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCertificate } from '../redux/certificate'

export const useCertificate = ({ query = {} }) => {
  const { current, loading, loaded, error } = useSelector(
    state => state.certificate
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (query.shortCode) {
      dispatch(
        getCertificate({
          query,
          populate: ['linked.ref']
        })
      )
    }
  }, [query.shortCode])

  const certificate = current

  return {
    certificate,
    loading,
    loaded,
    error
  }
}

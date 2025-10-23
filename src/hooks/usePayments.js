import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPayments } from '../redux/payment'

export const usePayments = () => {
  const { list, loading, loaded } = useSelector(state => state.payment)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list.length === 0 && loading === false) {
      dispatch(getPayments())
    }
  }, [])

  const payments = list

  return {
    payments,
    loading,
    loaded
  }
}

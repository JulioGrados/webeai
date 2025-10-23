import { useEffect } from 'react'

import { getAgreements } from '../redux/agreement'
import { useReduxState, useReduxFetch } from '../hooks/redux'

const AgrementsList = ({ children, slug, ...rest }) => {
  const { list, loading } = useReduxState('agreement')
  const fetchAgrements = useReduxFetch(getAgreements)

  useEffect(() => {
    if (list.length === 0) {
      fetchAgrements({
        query: {
          hidden: { $ne: true }
        }
      })
    }
  }, [])

  const agreements = list

  let agreement
  if (slug && agreements.length > 0) {
    agreement = agreements.find(item => item.slug === slug)
  }

  return children({ agreements, agreement, loading, ...rest })
}

export default AgrementsList

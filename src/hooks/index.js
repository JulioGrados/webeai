import { useState } from 'react'

export const useStateData = (initialData = {}) => {
  const [data, setData] = useState(initialData)

  const changeData = (name, value) => {
    data[name] = value
    setData({ ...data })
  }

  const changeDatas = entry => {
    setData({
      ...data,
      ...entry
    })
  }

  const cleanData = () => {
    setData({})
  }

  const change = data => {
    setData(data)
  }

  return { data, changeData, cleanData, changeDatas, data, change }
}

export { usePayments } from './usePayments'
export { useMetas } from './useMetas'
export { useLabels } from './useLabels'
export { useCategories } from './useCategories'
export { useLocalStorage } from './useLocalStorage'
export { useTestimonies } from './useTestimonies'
export { useCertificate } from './useCertificate'
export { useCourse } from './useCourse'

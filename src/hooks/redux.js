import { useSelector, useDispatch } from 'react-redux'

export const useReduxState = reducer => {
  const state = useSelector(state => state[reducer])
  return state
}

export const useReduxDispatch = action => {
  const dispatch = useDispatch()
  return () => {
    dispatch(action())
  }
}

export const useReduxFetch = action => {
  const dispatch = useDispatch()

  return params => {
    dispatch(action(params))
  }
}

export const useReduxAdd = action => {
  const dispatch = useDispatch()
  return (data, callback) => {
    const onSuccess = () => {
      callback && callback()
    }
    dispatch(action(data, { onSuccess }))
  }
}

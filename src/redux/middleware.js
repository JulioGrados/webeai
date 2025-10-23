const actionMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const { promise, types, ...rest } = action
  if (!promise) {
    next(action)
    rest && rest.onSuccess && rest.onSuccess(rest.payload)
    return rest.payload
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  next({ ...rest, type: REQUEST })

  const actionPromise = promise()

  actionPromise
    .then(query => {
      let success = false
      if (Array.isArray(query)) {
        success = query.length > 0
      } else if (Number.isInteger(query)) {
        success = true
      } else {
        success = query.success
      }

      if (success) {
        next({ ...rest, payload: query, type: SUCCESS })
        rest && rest.onSuccess && rest.onSuccess(query)
      } else {
        next({
          ...rest,
          payload: query.message || '',
          type: FAILURE
        })
        rest && rest.onError && rest.onError(query)
      }
      return query
    })
    .catch(error => {
      next({ ...rest, payload: 'Completar los datos', type: FAILURE })
      rest && rest.onError && rest.onError(error)
      return error
    })
}

export default actionMiddleware

import { listOpenMetas } from 'utils/api/metas'

import { reducers } from 'utils'

const { errorReducer, loadingReducer, successReducer } = reducers

// const
const initialValue = {
  list: [],
  current: null,
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_METAS = 'LOADING_GET_METAS'
const SUCCESS_GET_METAS = 'SUCCESS_GET_METAS'
const ERROR_GET_METAS = 'ERROR_GET_METAS'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_METAS: {
      return loadingReducer(state)
    }
    case ERROR_GET_METAS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_METAS: {
      return successReducer(state, {
        list: action.payload,
        loaded: true
      })
    }

    default:
      return state
  }
}

// actions
export const getMetas = (params, extra = {}) => {
  return {
    types: [LOADING_GET_METAS, SUCCESS_GET_METAS, ERROR_GET_METAS],
    promise: () => listOpenMetas(params),
    ...extra
  }
}

import { listOpenLabels } from 'utils/api/labels'

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

const LOADING_GET_LABELS = 'LOADING_GET_LABELS'
const SUCCESS_GET_LABELS = 'SUCCESS_GET_LABELS'
const ERROR_GET_LABELS = 'ERROR_GET_LABELS'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_LABELS: {
      return loadingReducer(state)
    }
    case ERROR_GET_LABELS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_LABELS: {
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
export const getLabels = (params, extra = {}) => {
  return {
    types: [LOADING_GET_LABELS, SUCCESS_GET_LABELS, ERROR_GET_LABELS],
    promise: () => listOpenLabels(params),
    ...extra
  }
}

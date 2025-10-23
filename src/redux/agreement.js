import { listOpenAgreements } from 'utils/api/agreements'

import {
  errorReducer,
  loadingReducer,
  successReducer
} from 'utils/functions/reducers'

// const
const initialValue = {
  list: [],
  current: null,
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_AGREEMENTS = 'LOADING_GET_AGREEMENTS'
const SUCCESS_GET_AGREEMENTS = 'SUCCESS_GET_AGREEMENTS'
const ERROR_GET_AGREEMENTS = 'ERROR_GET_AGREEMENTS'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_AGREEMENTS: {
      return loadingReducer(state)
    }
    case ERROR_GET_AGREEMENTS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_AGREEMENTS: {
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
export const getAgreements = params => {
  return {
    types: [
      LOADING_GET_AGREEMENTS,
      SUCCESS_GET_AGREEMENTS,
      ERROR_GET_AGREEMENTS
    ],
    promise: () => listOpenAgreements(params)
  }
}

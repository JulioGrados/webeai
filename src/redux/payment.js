import { listOpenPayments } from 'utils/api/payments'

import { reducers } from 'utils'

const { errorReducer, loadingReducer, successReducer } = reducers

// const
const initialValue = {
  list: [],
  loading: false,
  loaded: false
}

const LOADING_GET_PAYMENTS = 'LOADING_GET_PAYMENTS'
const SUCCESS_GET_PAYMENTS = 'SUCCESS_GET_PAYMENTS'
const ERROR_GET_PAYMENTS = 'ERROR_GET_PAYMENTS'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_PAYMENTS: {
      return loadingReducer(state)
    }
    case ERROR_GET_PAYMENTS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_PAYMENTS: {
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
export const getPayments = (params, extra = {}) => {
  return {
    types: [LOADING_GET_PAYMENTS, SUCCESS_GET_PAYMENTS, ERROR_GET_PAYMENTS],
    promise: () => listOpenPayments(params),
    ...extra
  }
}

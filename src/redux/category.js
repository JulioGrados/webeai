import { listOpenCategories } from 'utils/api/categories'

import {
  errorReducer,
  loadingReducer,
  successReducer
} from 'utils/functions/reducers'

// const
const initialValue = {
  list: [],
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_CATEGORIES = 'LOADING_GET_CATEGORIES'
const SUCCESS_GET_CATEGORIES = 'SUCCESS_GET_CATEGORIES'
const ERROR_GET_CATEGORIES = 'ERROR_GET_CATEGORIES'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_CATEGORIES: {
      return loadingReducer(state)
    }
    case ERROR_GET_CATEGORIES: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_CATEGORIES: {
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
export const getCategories = (params, extra = {}) => {
  return {
    types: [
      LOADING_GET_CATEGORIES,
      SUCCESS_GET_CATEGORIES,
      ERROR_GET_CATEGORIES
    ],
    promise: () => listOpenCategories(params),
    ...extra
  }
}

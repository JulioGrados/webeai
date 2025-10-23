import {
  listOpenTestimonies,
  listTestimoniesCourse
} from 'utils/api/testimonies'

import {
  errorReducer,
  loadingReducer,
  successReducer
} from 'utils/functions/reducers'

// const
const initialValue = {
  list: [],
  general: [],
  listCourse: [],
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_TESTIMONIES = 'LOADING_GET_TESTIMONIES'
const SUCCESS_GET_TESTIMONIES = 'SUCCESS_GET_TESTIMONIES'
const ERROR_GET_TESTIMONIES = 'ERROR_GET_TESTIMONIES'

const LOADING_GET_TESTIMONIESCOURSE = 'LOADING_GET_TESTIMONIESCOURSE'
const SUCCESS_GET_TESTIMONIESCOURSE = 'SUCCESS_GET_TESTIMONIESCOURSE'
const ERROR_GET_TESTIMONIESCOURSE = 'ERROR_GET_TESTIMONIESCOURSE'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_TESTIMONIES: {
      return loadingReducer(state)
    }
    case ERROR_GET_TESTIMONIES: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_TESTIMONIES: {
      return successReducer(state, {
        list: action.payload,
        loaded: true
      })
    }
    case LOADING_GET_TESTIMONIESCOURSE: {
      return loadingReducer(state)
    }
    case ERROR_GET_TESTIMONIESCOURSE: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_TESTIMONIESCOURSE: {
      return successReducer(state, {
        listCourse: action.payload,
        loaded: true
      })
    }
    default:
      return state
  }
}

// actions
export const getTestimonies = (params, extra = {}) => {
  return {
    types: [
      LOADING_GET_TESTIMONIES,
      SUCCESS_GET_TESTIMONIES,
      ERROR_GET_TESTIMONIES
    ],
    promise: () => listOpenTestimonies(params),
    ...extra
  }
}

export const getTestimoniesCourse = (params, extra = {}) => {
  return {
    types: [
      LOADING_GET_TESTIMONIESCOURSE,
      SUCCESS_GET_TESTIMONIESCOURSE,
      ERROR_GET_TESTIMONIESCOURSE
    ],
    promise: () => listTestimoniesCourse(params),
    ...extra
  }
}

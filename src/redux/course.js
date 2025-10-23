import {
  listOpenCourses,
  countCourses,
  detailOpenCourse
} from 'utils/api/courses'

import {
  errorReducer,
  loadingReducer,
  successReducer
} from 'utils/functions/reducers'

// const
const initialValue = {
  list: [],
  temp: [],
  total: 0,
  called: false,
  current: null,
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_COURSES = 'LOADING_GET_COURSES'
const SUCCESS_GET_COURSES = 'SUCCESS_GET_COURSES'
const ERROR_GET_COURSES = 'ERROR_GET_COURSES'

const LOADING_SEARCH_COURSES = 'LOADING_SEARCH_COURSES'
const SUCCESS_SEARCH_COURSES = 'SUCCESS_SEARCH_COURSES'
const ERROR_SEARCH_COURSES = 'ERROR_SEARCH_COURSES'

const LOADING_COUNT_COURSES = 'LOADING_COUNT_COURSES'
const SUCCESS_COUNT_COURSES = 'SUCCESS_COUNT_COURSES'
const ERROR_COUNT_COURSES = 'ERROR_COUNT_COURSES'

const LOADING_GET_COURSE = 'LOADING_GET_COURSE'
const SUCCESS_GET_COURSE = 'SUCCESS_GET_COURSE'
const ERROR_GET_COURSE = 'ERROR_GET_COURSE'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_COURSES: {
      return loadingReducer({ ...state, called: true })
    }
    case ERROR_GET_COURSES: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_COURSES: {
      return successReducer(state, {
        list: action.payload,
        loaded: true
      })
    }
    // SEARCH
    case LOADING_SEARCH_COURSES: {
      return loadingReducer(state)
    }
    case ERROR_SEARCH_COURSES: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_SEARCH_COURSES: {
      return successReducer(state, {
        temp: action.payload
      })
    }
    // SEARCH
    case LOADING_COUNT_COURSES: {
      return loadingReducer(state)
    }
    case ERROR_COUNT_COURSES: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_COUNT_COURSES: {
      return successReducer(state, {
        total: action.payload
      })
    }
    //course
    case LOADING_GET_COURSE: {
      return loadingReducer(state)
    }
    case ERROR_GET_COURSE: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_COURSE: {
      return successReducer(state, {
        current: action.payload,
        loaded: true
      })
    }
    default:
      return state
  }
}

// actions
export const getCourses = params => {
  return {
    types: [LOADING_GET_COURSES, SUCCESS_GET_COURSES, ERROR_GET_COURSES],
    promise: () => listOpenCourses(params)
  }
}

export const countCourse = params => {
  return {
    types: [LOADING_COUNT_COURSES, SUCCESS_COUNT_COURSES, ERROR_COUNT_COURSES],
    promise: () => countCourses(params)
  }
}

export const searchCourse = (params, extra = {}) => {
  return {
    types: [
      LOADING_SEARCH_COURSES,
      SUCCESS_SEARCH_COURSES,
      ERROR_SEARCH_COURSES
    ],
    promise: () => listOpenCourses(params),
    ...extra
  }
}

export const getCourse = (params, extra = {}) => {
  return {
    types: [LOADING_GET_COURSE, SUCCESS_GET_COURSE, ERROR_GET_COURSE],
    promise: () => detailOpenCourse(params),
    ...extra
  }
}

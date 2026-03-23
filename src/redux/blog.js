import {
  listOpenBlogs,
  detailOpenBlog
} from 'utils/api/blog'

import {
  errorReducer,
  loadingReducer,
  successReducer
} from 'utils/functions/reducers'

const initialValue = {
  list: [],
  current: null,
  loading: false,
  loaded: false,
  error: ''
}

const LOADING_GET_BLOGS = 'LOADING_GET_BLOGS'
const SUCCESS_GET_BLOGS = 'SUCCESS_GET_BLOGS'
const ERROR_GET_BLOGS = 'ERROR_GET_BLOGS'

const LOADING_GET_BLOG = 'LOADING_GET_BLOG'
const SUCCESS_GET_BLOG = 'SUCCESS_GET_BLOG'
const ERROR_GET_BLOG = 'ERROR_GET_BLOG'

export default function reducer (state = initialValue, action) {
  switch (action.type) {
    case LOADING_GET_BLOGS: {
      return loadingReducer(state)
    }
    case ERROR_GET_BLOGS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_BLOGS: {
      return successReducer(state, {
        list: action.payload,
        loaded: true
      })
    }
    case LOADING_GET_BLOG: {
      return loadingReducer(state)
    }
    case ERROR_GET_BLOG: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_BLOG: {
      return successReducer(state, {
        current: action.payload,
        loaded: true
      })
    }
    default:
      return state
  }
}

export const getBlogs = (params, extra = {}) => {
  return {
    types: [
      LOADING_GET_BLOGS,
      SUCCESS_GET_BLOGS,
      ERROR_GET_BLOGS
    ],
    promise: () => listOpenBlogs(params),
    ...extra
  }
}

export const getBlog = (params, extra = {}) => {
  return {
    types: [
      LOADING_GET_BLOG,
      SUCCESS_GET_BLOG,
      ERROR_GET_BLOG
    ],
    promise: () => detailOpenBlog(params),
    ...extra
  }
}

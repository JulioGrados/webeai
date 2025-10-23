import { listTeachers, createOrUpdateUser, createOrUpdateUserRegister, countUsers } from 'utils/api/users'
import { createOpenContact } from 'utils/api/contacts'
import { createOpenClaim } from 'utils/api/claims'

import {
  errorReducer,
  cleanReducer,
  loadingReducer,
  successReducer
} from 'utils/functions/reducers'

// const
const initialValue = {
  list: [],
  teachers: [],
  count: 0,
  loading: false,
  loaded: false,
  error: ''
}

/* const LOADING_GET_USERS = 'LOADING_GET_USERS'
const SUCCESS_GET_USERS = 'SUCCESS_GET_USERS'
const ERROR_GET_USERS = 'ERROR_GET_USERS' */

const LOADING_GET_TEACHERS = 'LOADING_GET_TEACHERS'
const SUCCESS_GET_TEACHERS = 'SUCCESS_GET_TEACHERS'
const ERROR_GET_TEACHERS = 'ERROR_GET_TEACHERS'

const LOADING_GET_TEACHER = 'LOADING_GET_TEACHER'
const SUCCESS_GET_TEACHER = 'SUCCESS_GET_TEACHER'
const ERROR_GET_TEACHER = 'ERROR_GET_TEACHER'

const LOADING_ADD_CONTACT = 'LOADING_ADD_CONTACT'
const SUCCESS_ADD_CONTACT = 'SUCCESS_ADD_CONTACT'
const ERROR_ADD_CONTACT = 'ERROR_ADD_CONTACT'

const LOADING_ADD_CLAIM = 'LOADING_ADD_CLAIM'
const SUCCESS_ADD_CLAIM = 'SUCCESS_ADD_CLAIM'
const ERROR_ADD_CLAIM = 'ERROR_ADD_CLAIM'

const LOADING_ADD_USER = 'LOADING_ADD_USER'
const SUCCESS_ADD_USER = 'SUCCESS_ADD_USER'
const ERROR_ADD_USER = 'ERROR_ADD_USER'

const LOADING_COUNT_USERS = 'LOADING_COUNT_USERS'
const SUCCESS_COUNT_USERS = 'SUCCESS_COUNT_USERS'
const ERROR_COUNT_USERS = 'ERROR_COUNT_USERS'

const RELOAD_STATE = 'RELOAD_STATE'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_TEACHERS: {
      return loadingReducer(state)
    }
    case ERROR_GET_TEACHERS: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_TEACHERS: {
      return successReducer(state, {
        teachers: action.payload
      })
    }
    // GET
    case LOADING_GET_TEACHER: {
      return loadingReducer(state)
    }
    case ERROR_GET_TEACHER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_TEACHER: {
      return successReducer(state, {
        teacher: action.payload.length ? action.payload[0] : null
      })
    }
    // CREATE
    case LOADING_ADD_USER: {
      return loadingReducer(state)
    }
    case ERROR_ADD_USER: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_ADD_USER: {
      return successReducer(state, {
        list: state.loaded ? [action.payload, ...state.list] : []
      })
    }
    // CREATE
    case LOADING_ADD_CONTACT: {
      return loadingReducer(state)
    }
    case ERROR_ADD_CONTACT: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_ADD_CONTACT: {
      return successReducer(state)
    }
      
    // CREATE
    case LOADING_ADD_CLAIM: {
      return loadingReducer(state)
    }
    case ERROR_ADD_CLAIM: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_ADD_CLAIM: {
      return successReducer(state)
    }
      
    // SEARCH
    case LOADING_COUNT_USERS: {
      return loadingReducer(state)
    }
    case ERROR_COUNT_USERS: {
      console.log('error', action.payload)
      return errorReducer(state, action.payload)
    }
    case SUCCESS_COUNT_USERS: {
      console.log('exito', action.payload)
      return successReducer(state, {
        count: action.payload
      })
    }
    // CLEAN
    case RELOAD_STATE: {
      return cleanReducer(state)
    }
    default:
      return state
  }
}

// actions
/* export const getUsers = params => {
  return {
    types: [LOADING_GET_USERS, SUCCESS_GET_USERS, ERROR_GET_USERS],
    promise: () => listTeachers(params)
  }
}
 */
export const getTeachers = () => {
  return {
    types: [LOADING_GET_TEACHERS, SUCCESS_GET_TEACHERS, ERROR_GET_TEACHERS],
    promise: () => listTeachers({ query: { roles: { $in: ['Docente'] } } })
  }
}

export const getTeacher = username => {
  return {
    types: [LOADING_GET_TEACHER, SUCCESS_GET_TEACHER, ERROR_GET_TEACHER],
    promise: () => listTeachers({ query: { roles: 'Docente', username } })
  }
}

export const addOrUpdateUser = (data, extra = {}) => {
  return {
    types: [LOADING_ADD_USER, SUCCESS_ADD_USER, ERROR_ADD_USER],
    promise: () => createOrUpdateUser(data),
    ...extra
  }
}

export const addOrUpdateUserRegister = (data, extra = {}) => {
  return {
    types: [LOADING_ADD_USER, SUCCESS_ADD_USER, ERROR_ADD_USER],
    promise: () => createOrUpdateUserRegister(data),
    ...extra
  }
}

export const addContact = (data, extra = {}) => {
  return {
    types: [LOADING_ADD_CONTACT, SUCCESS_ADD_CONTACT, ERROR_ADD_CONTACT],
    promise: () => createOpenContact(data),
    ...extra
  }
}

export const addClaim = (data, extra = {}) => {
  console.log('data redux', data)
  return {
    types: [LOADING_ADD_CLAIM, SUCCESS_ADD_CLAIM, ERROR_ADD_CLAIM],
    promise: () => createOpenClaim(data),
    ...extra
  }
}

export const countUser = params => {
  return {
    types: [LOADING_COUNT_USERS, SUCCESS_COUNT_USERS, ERROR_COUNT_USERS],
    promise: () => countUsers(params)
  }
}

export const reloadState = () => {
  return {
    type: RELOAD_STATE
  }
}

import { detailOpenCertificate } from 'utils/api/certificates'

import { reducers } from 'utils'

const { errorReducer, loadingReducer, successReducer } = reducers

// const
const initialValue = {
  current: null,
  loading: true,
  loaded: false,
  error: ''
}

const LOADING_GET_CERTIFICATE = 'LOADING_GET_CERTIFICATE'
const SUCCESS_GET_CERTIFICATE = 'SUCCESS_GET_CERTIFICATE'
const ERROR_GET_CERTIFICATE = 'ERROR_GET_CERTIFICATE'

// reducer
export default function reducer (state = initialValue, action) {
  switch (action.type) {
    // LIST
    case LOADING_GET_CERTIFICATE: {
      return loadingReducer(state)
    }
    case ERROR_GET_CERTIFICATE: {
      return errorReducer(state, action.payload)
    }
    case SUCCESS_GET_CERTIFICATE: {
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
export const getCertificate = (params, extra = {}) => {
  return {
    types: [
      LOADING_GET_CERTIFICATE,
      SUCCESS_GET_CERTIFICATE,
      ERROR_GET_CERTIFICATE
    ],
    promise: () => detailOpenCertificate(params),
    ...extra
  }
}

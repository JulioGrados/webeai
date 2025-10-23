import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createMiddleware from './middleware'

import user from './user'
import course from './course'
import category from './category'
import agreement from './agreement'
import payment from './payment'
import meta from './meta'
import label from './label'
import testimony from './testimony'
import certificate from './certificate'

const reducers = combineReducers({
  user,
  course,
  category,
  agreement,
  payment,
  meta,
  label,
  testimony,
  certificate
})

const middleware = [createMiddleware, thunk]

export const initStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return store
}

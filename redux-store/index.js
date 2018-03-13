import { combineReducers } from 'redux'
import customisationStore from 'redux-store/customisation'

export const actions = {
  ...customisationStore.actions
}

export const reducers = combineReducers({
  ...customisationStore.reducers
})

export const initialState = {
  ...customisationStore.initialState
}

export const storeKeys = {
  customisation: customisationStore.storeKey
}

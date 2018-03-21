export const makeSubStore = (storeKey, actions, reducers, initialState) => ({
  storeKey,
  actions: {
    [storeKey]: actions
  },
  reducers: {
    [storeKey]: reducers
  },
  initialState: {
    [storeKey]: initialState
  }
})

const getAction = (action) => typeof action === 'function'
  ? action()
  : ({ type: action })

export const asyncAction = ({
  api,
  requestAction,
  successAction,
  failureAction,
  shouldHandleRaceCondition = false
}) => (requestPayload) => async (dispatch) => {
  dispatch({ ...getAction(requestAction) })
  const payload = await api(requestPayload)
  const timestamp = new Date()
  if (payload.error) {
    dispatch({
      ...getAction(failureAction),
      error: payload.error,
      errorCode: payload.errorCode,
      _hrc: {
        shouldHandleRaceCondition,
        timestamp
      }
    })
  } else {
    dispatch({
      ...getAction(successAction),
      payload,
      _hrc: {
        shouldHandleRaceCondition,
        timestamp
      }
    })
  }
}

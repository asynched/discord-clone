import { useReducer, useMemo } from 'react'

/**
 * @typedef ActionType
 *
 * @property {string | number | symbol} type
 * @property {any} payload
 */

/**
 * @template T
 * @typedef ReducerCallbackType
 * @param {T} state
 * @param {ActionType} action
 */

/**
 * @callback DispatchCallbackType
 * @param {ActionType} action
 * @returns {void}
 */

/**
 * @template T
 * @param {ReducerCallbackType} reducer
 * @param {T} initialState
 * @returns {[T, DispatchCallbackType]}
 */
const useMemoizedReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [memoizedState, memoizedDispatch] = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  )

  return [memoizedState, memoizedDispatch]
}

export default useMemoizedReducer

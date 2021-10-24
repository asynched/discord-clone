import useMemoizedReducer from '@hooks/useContextMemo'
import React, { createContext, useMemo, useReducer } from 'react'

/**
 * @typedef ActionType
 *
 * @property {string | number | symbol} type
 * @property {any} payload
 */

/**
 * @callback DispatchCallbackType
 * @param {ActionType} action
 * @returns {void}
 */

export const serverContextActions = {
  SET_ACTIVE_SERVER: 1,
  SET_SERVERS: 2,
}

const serverContextInitialState = {
  servers: [],
  activeServer: {
    id: null,
    name: null,
    image: null,
    channels: [],
  },
}

/**
 *
 * @param {typeof serverContextInitialState} state
 * @param {ActionType} action
 * @returns {typeof serverContextInitialState}
 */
const serverContextReducer = (state, action) => {
  switch (action.type) {
    case serverContextActions.SET_ACTIVE_SERVER: {
      return { ...state, activeServer: action.payload }
    }
    case serverContextActions.SET_SERVERS: {
      return { ...state, servers: action.payload }
    }
    default: {
      throw new Error(`Action type "${action.type}" is not defined`)
    }
  }
}

/**
 * @type {[typeof serverContextInitialState, DispatchCallbackType]}
 */
export const ServerContext = createContext(null)

const ServerContextProvider = ({ children }) => {
  const [state, dispatch] = useMemoizedReducer(
    serverContextReducer,
    serverContextInitialState
  )

  return (
    <ServerContext.Provider value={[state, dispatch]}>
      {children}
    </ServerContext.Provider>
  )
}

export default ServerContextProvider

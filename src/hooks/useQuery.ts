import { SUBGRAPH_GATEWAY_URL } from "../config/subgraph"
import { useEffect, useReducer, useRef, Reducer } from "react"
import { request } from "graphql-request"

interface State<T> {
  data?: T
  error?: Error
  isFetching: boolean
}

enum Actions {
  Start,
  Success,
  Failure,
}

type Action<T> =
  | { type: Actions.Start }
  | { type: Actions.Success; payload: T }
  | { type: Actions.Failure; payload: Error }

const fetchReducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case Actions.Start:
      return { ...state, isFetching: true }

    case Actions.Success:
      return { ...state, data: action.payload, isFetching: false }

    case Actions.Failure:
      return { ...state, isFetching: false, error: action.payload }

    default:
      return state
  }
}

function useQuery<T = unknown>(subgraphId: string, query?: string): State<T> {
  const shouldUpdateState = useRef<boolean>(true)
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isFetching: false,
  }

  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(
    fetchReducer,
    initialState
  )

  useEffect(() => {
    if (!query) return

    shouldUpdateState.current = true

    const fetchData = async () => {
      dispatch({ type: Actions.Start })

      try {
        const response = await request(SUBGRAPH_GATEWAY_URL + subgraphId, query)
        if (!shouldUpdateState.current) return

        dispatch({ type: Actions.Success, payload: response })
      } catch (error) {
        if (!shouldUpdateState.current) return

        dispatch({ type: Actions.Failure, payload: error as Error })
      }
    }

    fetchData()

    return () => {
      shouldUpdateState.current = false
    }
  }, [query])

  return state
}

export default useQuery

import { DISPLAY_SUCCESS, DISPLAY_ERROR } from './actions'

export const displayReducer = (state = '', { type, payload }) => {
  switch (type) {
    case DISPLAY_SUCCESS:
      return payload.data

    case DISPLAY_ERROR:
      return payload.error

    default:
      return state
  }
}
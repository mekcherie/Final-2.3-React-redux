export const LOAD_DISPLAY= 'LOAD_DISPLAY'
export const DISPLAY_SUCCESS = 'DISPLAY_SUCCESS'
export const DISPLAY_ERROR = 'DISPLAY_ERROR'

export const displaySuccess = (data) => {
  return {
    type: DISPLAY_SUCCESS,
    payload: { data }
  }
}

export const displayError = (error) => {
  return {
    type: DISPLAY_ERROR,
    payload: { error }
  }
}

export const loadDisplay = (number) => {
  return async (dispatch) => {
    const url = `https://swapi.dev/api/people/${number}/`

    try {
      const res = await fetch(url)
      const json = await res.json()

      const resTwo = await fetch(json.homeworld)
      const jsonTwo = await resTwo.json()

      const filmsRes = await Promise.all(json.films.map(film => fetch(film)))

      const filmsJSON = await Promise.all(filmsRes.map(res => res.json()))

      const jsonArr = [json, jsonTwo, filmsJSON]

      dispatch(displaySuccess(jsonArr))
    } catch (error) {
      dispatch(displayError(error))
    }
  }
}
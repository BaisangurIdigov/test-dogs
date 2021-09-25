const initialState = {
  loading: false,
  items: [],
  error: null,
}

export default function breeds(state = initialState, action) {
  switch (action.type) {
    case "get/breeds/pending":
      return {
        ...state,
        loading: true
      }
    case "get/breeds/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case "get/breeds/rejected":
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export const fetchBreeds = () => {
  return async (dispatch)=> {
    dispatch({ type: "get/breeds/pending"})
    try {
      const response = await fetch("/breeds");
      const json = await response.json();
      dispatch({ type: "get/breeds/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "get/breeds/rejected", error: e.toString() });
    }
  }
}
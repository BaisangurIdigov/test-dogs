const initialState = {
  loading: false,
  items: [],
  error: null,
};

export default function dogs(state = initialState, action) {
  switch (action.type) {
    case "get/dogs/pending":
      return {
        ...state,
        loading: true,
      };
    case "get/dogs/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload.dogs,
      };
    case "get/dogs/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "get/Pagination/pending":
      return {
        ...state,
        loading: true,
      };
    case "get/Pagination/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload.dogs,
      };
    case "get/Pagination/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const fetchDogs = () => {
  return async (dispatch) => {
    dispatch({ type: "get/dogs/pending" });
    try {
      const response = await fetch("/getDogs");
      const json = await response.json();
      dispatch({ type: "get/dogs/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "get/dogs/rejected", error: e.toString() });
    }
  };
};

export const fetchPagination = ({ search, page, breed }) => {
  console.log( search, page, breed )
  const fetchSearch = search ? search : ''
  const fetchPage = page ? page : ''
  const fetchBreed = breed ? breed : ''
  console.log( fetchSearch, fetchPage, fetchBreed )
  return async (dispatch) => {
    dispatch({ type: "get/Pagination/pending" });
    try {
      const response = await fetch(`/getDogs/?search=${fetchSearch}&page=${fetchPage}&breedId=${fetchBreed}`);
      const json = await response.json();
      dispatch({ type: "get/Pagination/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "get/Pagination/rejected", error: e.toString() });
    }
  };
};

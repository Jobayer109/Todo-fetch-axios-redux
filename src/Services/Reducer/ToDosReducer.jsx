import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../Constants/Constants";

const initialToDosState = {
  toDos: [],
  isLoading: false,
  error: null,
};

export const toDosReducer = (state = initialToDosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        toDos: action.payload,
      };

    default:
      return state;
  }
};

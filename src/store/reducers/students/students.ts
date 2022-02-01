import {StudentsAction, StudentsActionTypes, StudentsState} from "./types";

const initialState: StudentsState = {
  data: [],
  isLoading: true,
  hasError: null
}

export default function studentsReducer(state = initialState, action: StudentsAction) {
  switch (action.type) {
    case StudentsActionTypes.SET_IS_LOADING:
      return { ...state, loading: action.payload }
    case StudentsActionTypes.SET_STUDENTS:
      return { ...state, isLoading: false, data: action.payload }
    case StudentsActionTypes.SET_ERROR:
      return { ...state, isLoading: false, hasError: action.payload }
    default:
      return state;
  }
}

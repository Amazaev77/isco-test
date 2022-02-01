import {IPopupState, PopupAction, PopupActionTypes} from "./types";

const initialState: IPopupState = {
  isOpen: false,
  studentId: null,
  columnId: null,
  value: '',
  coordinates: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    left: -3000,
    right: 0,
    top: -3000,
    bottom: 0
},
}

export default function popupReducer(state = initialState, action: PopupAction) {
  switch (action.type) {
    case PopupActionTypes.SET_COORDINATES:
      return {...state, coordinates: action.payload}
    case PopupActionTypes.SET_IS_OPEN:
      return {...state, isOpen: true}
    case PopupActionTypes.SET_OPENED_ID:
      const { studentId, columnId } = action.payload;
      return { ...state, studentId, columnId };
    case PopupActionTypes.SET_VALUE:
      return { ...state, value: action.payload };
    case PopupActionTypes.CLOSE_POPUP:
      return initialState;
    default:
      return state;
  }
}

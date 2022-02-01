import {
  ClosePopup,
  CoordinatesType,
  PopupActionTypes,
  SetCoordinates,
  SetIsOpen,
  SetOpenedId,
  SetValue
} from "./types";
import {ColumnIdType} from "../../../models/IColumn";

export const popupActionCreators = {
  setIsOpen: (): SetIsOpen => ({ type: PopupActionTypes.SET_IS_OPEN, payload: true}),
  closePopup: (): ClosePopup => ({ type: PopupActionTypes.CLOSE_POPUP}),
  setCoordinates: (payload: CoordinatesType): SetCoordinates => {
    return { type: PopupActionTypes.SET_COORDINATES, payload}
  },
  setOpenedId: (studentId: number, columnId: ColumnIdType): SetOpenedId => {
    return {
      type: PopupActionTypes.SET_OPENED_ID,
      payload: {studentId, columnId}
    }
  },
  setValue: (value: string): SetValue => ({type: PopupActionTypes.SET_VALUE, payload: value})
}

import {ColumnIdType} from "../../../models/IColumn";

export type CoordinatesType = Record<'x' | 'y' | 'width' | 'height' | 'top' | 'right' | 'left' | 'bottom', number>

export interface IPopupState {
  isOpen: boolean;
  coordinates: CoordinatesType;
  studentId: number | null;
  columnId: ColumnIdType | null;
  value: string;
}

export enum PopupActionTypes {
  SET_COORDINATES = 'SET_COORDINATES',
  SET_IS_OPEN = 'SET_IS_OPEN',
  CLOSE_POPUP = 'CLOSE_POPUP',
  SET_OPENED_ID = 'SET_OPENED_ID',
  SET_VALUE = 'SET_VALUE',
}

export interface SetIsOpen {
  type: PopupActionTypes.SET_IS_OPEN,
  payload: true;
}

export interface SetCoordinates {
  type: PopupActionTypes.SET_COORDINATES,
  payload: CoordinatesType;
}

export interface ClosePopup {
  type: PopupActionTypes.CLOSE_POPUP,
}

export interface SetOpenedId {
  type: PopupActionTypes.SET_OPENED_ID,
  payload: { studentId: number, columnId: ColumnIdType }
}

export interface SetValue {
  type: PopupActionTypes.SET_VALUE,
  payload: string
}


export type PopupAction =
  SetIsOpen
  | SetCoordinates
  | ClosePopup
  | SetOpenedId
  | SetValue

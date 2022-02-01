import {IStudent} from "../../../models/IStudent";


export interface StudentsState {
  data: IStudent[];
  isLoading: boolean,
  hasError: string | null
}

export enum StudentsActionTypes {
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_STUDENTS = "SET_STUDENTS",
  SET_ERROR = "SET_ERROR",
}

export interface SetIsLoadingAction {
  type: StudentsActionTypes.SET_IS_LOADING,
  payload: boolean
}

export interface GetStudentsAction {
  type: StudentsActionTypes.SET_STUDENTS,
  payload: IStudent[]
}

export interface SetErrorAction {
  type: StudentsActionTypes.SET_ERROR,
  payload: string
}

export type StudentsAction =
  SetIsLoadingAction
  | GetStudentsAction
  | SetErrorAction

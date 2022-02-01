import {SetErrorAction, SetIsLoadingAction, StudentsActionTypes} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import {IStudent} from "../../../models/IStudent";

export const studentsActionCreators = {
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: StudentsActionTypes.SET_IS_LOADING, payload
  }),
  setError: (payload: string): SetErrorAction => ({
    type: StudentsActionTypes.SET_ERROR, payload
  }),
  getStudents: () => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(studentsActionCreators.setIsLoading(true));

        const { data } = await axios.get<IStudent[]>('./mockStudents.json');

        dispatch({
          type: StudentsActionTypes.SET_STUDENTS,
          payload: data.map((el, idx) => ({...el, order: idx + 1})),
        })

      } catch (error) {
        dispatch(studentsActionCreators.setError('Произошла ошибка при загрузке данных'))
      }
    }
  }
}

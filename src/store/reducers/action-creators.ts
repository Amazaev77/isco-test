import {popupActionCreators} from "./popup/actions";
import {studentsActionCreators} from "./students/actions";

export const allActionCreators = {
  ...popupActionCreators,
  ...studentsActionCreators
}

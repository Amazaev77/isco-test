import React, {ChangeEvent} from 'react';
import { FC } from "react";
import makeStyles from '@mui/styles/makeStyles';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {CoordinatesType} from "../../store/reducers/popup/types";
import {columns} from "../Table/Table";
import Input from "./Input";
import styles from './Popup.module.scss';
import moment from "moment";
import TransitionContainer from "../TransitionContainer";

const useStyles = makeStyles({
  popup: {
    position: "absolute",
    left: ({ right, left }: CoordinatesType) => {
      return (window.innerWidth < right + 620) ? left - 620 : right + 20
    },
    top: (props: CoordinatesType) => props.top - 20,
    width: 600,
    zIndex: 3,
    background: 'white',
    padding: 20,
    boxShadow: '0px 9px 14px rgba(0, 0, 0, 0.03)',
    borderRadius: 15,
  },
  square: {
    position: 'absolute',
    top: 40,
    left: ({ right }) => (window.innerWidth < right + 620) ? '' : '-7px',
    right: ({ right }) => (window.innerWidth < right + 620) ? '-7px' : '',
    width: 20,
    height: 20,
    background: 'white',
    borderRadius: '4px',
    transform: 'rotate(-45deg)'
  }
})


 const Popup: FC = () => {
  const coordinates = useTypedSelector(state => state.popup.coordinates);

  const classes = useStyles(coordinates);

  const { closePopup, setValue } = useActions();

  const isOpen = useTypedSelector(state => state.popup.isOpen);
  const studentId = useTypedSelector(state => state.popup.studentId);
  const columnId = useTypedSelector(state => state.popup.columnId);
  const value = useTypedSelector(state => state.popup.value);

  const column = columns.find(elem => elem.id === columnId)
  const student = useTypedSelector(state => state.students.data.find(
    elem => elem.id === studentId
  ))

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     setValue(e.target.value)
   }

  return (
      <TransitionContainer state={isOpen} timeout={200}>
        <div>
          <div className={classes.popup}>
            <div className={classes.square} />
            <div className={styles.header}>Поставить отметку</div>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <div className={styles.list_item_label}>Студент</div>
                <div className={styles.list_item_value}>{student?.fullname}</div>
              </li>
              <li className={styles.list_item}>
                <div className={styles.list_item_label}>Дата</div>
                <div className={styles.list_item_value}>{moment(column?.date).format('L')}</div>
              </li>
            </ul>
            <Input onChange={handleChange} value={`${value}`} />
            <button className={styles.button} onClick={() => closePopup()}>
              Поставить отметку
            </button>
          </div>
          <div onClick={() => closePopup()} className={styles.background} />
        </div>
      </TransitionContainer>
  );
}

export default Popup;

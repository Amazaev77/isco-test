import React, {FC, useRef} from 'react';
import {IColumn} from "../../../models/IColumn";
import TableCell from "@mui/material/TableCell";
import {makeStyles} from "@mui/styles";
import {CoordinatesType} from "../../../store/reducers/popup/types";
import {useActions} from "../../../hooks/useActions";

interface IBodyCellProps {
  item: IColumn,
  value: number | string,
  studentId: number
}

const useStyles = makeStyles({
  root: {
    transition: 'background 100ms',
    cursor: 'pointer',
    border: '1px solid #F5F6FA',
    position: 'relative',
    "&:hover": {
      background: "#F5F6FA"
    }
  },
});

const BodyCell: FC<IBodyCellProps> = (props: IBodyCellProps) => {
  const { item, value, studentId } = props;
  const styles = useStyles();

  const cellRef = useRef<HTMLTableCellElement | null>(null)

  const { setIsOpen, setCoordinates, setOpenedId, setValue } = useActions();

  const handleClickOpen = () => {
    const { id } = item;
    if (id !== 'fullname' && id !== 'order') {
      const clientRect = cellRef.current?.getBoundingClientRect() as CoordinatesType
      setIsOpen();
      setCoordinates(clientRect);
      setOpenedId(studentId, item.id);
      setValue(value as string);
    }
  };

  return (
    <TableCell
      ref={cellRef}
      align={item.align}
      onClick={handleClickOpen}
      className={styles.root}
    >
      {value}
    </TableCell>
  );
};

export default BodyCell;

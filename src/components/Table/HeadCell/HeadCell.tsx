import React, {FC} from 'react';
import TableCell from "@mui/material/TableCell";
import {IColumn} from "../../../models/IColumn";

interface IHeadCellProps {
  item: IColumn
}

const HeadCell: FC<IHeadCellProps> = ({ item }) => (
  <TableCell
    align={item.align}
    style={{
      top: 0,
      minWidth: item.minWidth,
      maxWidth: item.maxWidth,
      border: '1px solid #F5F6FA'
    }}
  >
    {item.label}
  </TableCell>
);

export default HeadCell;

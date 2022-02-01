import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import HeadCell from "./HeadCell";
import BodyCell from "./BodyCell";
import {IColumn} from "../../models/IColumn";
import {useActions} from "../../hooks/useActions";
import {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Alert, Box, CircularProgress} from "@mui/material";

export const columns: IColumn[] = [
  { id: 'order', label: 'П', maxWidth: 20, align: 'center' },
  { id: 'fullname', label: 'Фио студента', minWidth: 170 },
  { id: 'systemApproach', label: 'Системный подход', minWidth: 100, align: 'center', date: '2021-11-01T17:34:37+03:00' },
  { id: 'absences', label: 'Отсутствий', minWidth: 170, align: 'center', date: '2021-12-01T17:34:37+03:00' },
  { id: 'points', label: 'Баллы по практ. занятиям', minWidth: 170, align: 'center', date: '2022-01-01T17:34:37+03:00' },
  { id: 'finalGrade', label: 'Итоговая оценка', minWidth: 170, align: 'center', date: '2022-02-01T17:34:37+03:00' },
];

const TableComponent = () =>  {
  const { getStudents } = useActions();

  useEffect(() => {
    getStudents();
  }, [])

  const isLoading = useTypedSelector(state => state.students.isLoading);
  const hasError = useTypedSelector(state => state.students.hasError);
  const students = useTypedSelector(state => state.students.data);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <CircularProgress size={45}  />
      </Box>
    )
  }

  if (hasError) {
    return (
      <Alert style={{ width: 350, margin: '100px auto' }} severity="error">
        Произошла ошибка при загрузке данных!
      </Alert>
    )
  }

  return (
    <Paper sx={{ width: '70%', margin: "150px auto", overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <HeadCell key={column.id} item={column} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={student.id}>
                    {columns.map((column) => {
                      return (
                        <BodyCell
                          item={column}
                          value={student[column.id]}
                          key={column.id}
                          studentId={student.id}
                        />
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TableComponent;

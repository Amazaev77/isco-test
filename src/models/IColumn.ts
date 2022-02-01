export type ColumnIdType = 'fullname' | 'systemApproach' | 'absences' | 'points' | 'finalGrade' | 'order'

export interface IColumn {
  id: ColumnIdType;
  label: string;
  minWidth?: number;
  maxWidth?: number;
  date?: string;
  align?: 'right' | 'center';
}

import { RowID, RowElement } from './interface.ts';


export type InsertRow = (row: RowElement) => RowID;

export type DeleteRow = (rowId: RowID) => void;

export type UpdateRow = (rowId: RowID, row: RowElement) => RowID;

export const insertRow: InsertRow;
export const deleteRow: DeleteRow;
export const updateRow: UpdateRow;

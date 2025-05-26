import type {InputType} from "./types.ts";
import moment from 'moment';

export interface IRowWithKey {
    key: string;
}

export interface IRunningInfoRow extends IRowWithKey {
    date: moment.Moment
    distance: number
}

export interface IRow {
    [key: string]: string | number | moment.Moment;
}

export interface IColumn<DataType> {
    title: string;
    dataIndex: string;
    editable: boolean;
    inputType: InputType;
    sorter?: (a: DataType, b: DataType) => number;
    defaultSortOrder?: 'ascend' | 'descend';
}
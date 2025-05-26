import EditableTable from "./EditableTable/EditableTable.tsx";
import {useState} from "react";
import type {IColumn} from "./common/interfaces.ts";
import InputRowForm from "./InputRowForm/InputRowForm.tsx";
import moment from 'moment';

interface DataType {
    key: string
    date: moment.Moment
    distance: number
}

const Workout = () => {

    const [data, setData] = useState<DataType[]>([]);
    const columns: IColumn<DataType>[] = [
        {
            title: 'Date (DD.MM.YYYY)',
            dataIndex: 'date',
            editable: true,
            inputType: 'date',
            sorter: (a , b) =>  a.date.diff(b.date),
            defaultSortOrder: "ascend"
        },
        {
            title: 'Distance traveled, km',
            dataIndex: 'distance',
            editable: true,
            inputType: 'number',
            sorter: (a , b) =>  a.distance - b.distance,
        },
    ]

    return <>
        <InputRowForm<DataType>
            columns={columns}
            data={data}
            setData={setData}
        />
        <EditableTable<DataType>
            columns={columns}
            data={data}
            setData={setData}
        />
    </>
}

export default Workout
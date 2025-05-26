import {Popconfirm, Typography} from "antd";
import classes from "./editable-table.module.css"
import { QuestionCircleOutlined } from '@ant-design/icons';
import type {IRowWithKey} from "../common/interfaces.ts";

const { Link } = Typography;

interface IEditDeleteActions<DataType extends IRowWithKey> {
    editingKey: string
    editRow: (record: DataType) => void
    deleteRow: (key: string) => void
    record: DataType
}

const EditDeleteActions = <DataType extends IRowWithKey>(props: IEditDeleteActions<DataType>) => {
    return <div className={classes["table-row-actions-container"]}>
        <Link disabled={props.editingKey !== ''} onClick={() => props.editRow(props.record)}>
            Edit
        </Link>
        <Popconfirm
            title="Sure to delete?"
            onConfirm={() => props.deleteRow(props.record.key)}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        >
            <Link type='danger'>Delete</Link>
        </Popconfirm>
    </div>
}

export default EditDeleteActions;
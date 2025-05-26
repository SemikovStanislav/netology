import {Popconfirm, Typography} from "antd";
import React from "react";
import classes from "./editable-table.module.css"
import type {IRowWithKey} from "../common/interfaces.ts";


const { Link } = Typography;

interface ISaveCancelAction<DataType extends IRowWithKey> {
    saveRow: (key: React.Key) => void;
    cancelEditingRow: () => void;
    record: DataType;
}

const SaveCancelActions =  <DataType extends IRowWithKey>(props: ISaveCancelAction<DataType>) => {
    return <div className={classes["table-row-actions-container"]}>
            <Link onClick={() => props.saveRow(props.record.key)}>
              Save
            </Link>
            <Popconfirm title="Sure to cancel?" onConfirm={props.cancelEditingRow}>
              <a>Cancel</a>
            </Popconfirm>
          </div>
}

export default SaveCancelActions;
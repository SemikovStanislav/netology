import React, {type Dispatch, type SetStateAction, useState} from 'react';
import type { TableProps } from 'antd';
import { Form, Table } from 'antd';
import EditableCell from './EditableCell';
import SaveCancelActions from "./SaveCancelActions.tsx";
import EditDeleteActions from "./EditDeleteActions.tsx";
import type {IColumn, IRowWithKey} from "../common/interfaces.ts";

interface IEditableTable<DataType extends IRowWithKey> {
    columns: IColumn<DataType>[]
    data: DataType[]
    setData: Dispatch<SetStateAction<DataType[]>>
}


const EditableTable = <DataType extends IRowWithKey>(props: IEditableTable<DataType>) => {
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record: DataType) => record.key === editingKey;

    const editRow = (record: Partial<DataType> & { key: React.Key }) => {
        form.setFieldsValue({...record });
        setEditingKey(record.key);
    };

    const deleteRow = (key: string) => {
        props.setData(prevState => prevState.filter((row: DataType) => row.key !== key))
    }

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as DataType;

            const newData = [...props.data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                props.setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                props.setData(newData);
                setEditingKey('');
            }

            console.log("editedRow", row);
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        ...props.columns,
        {
            title: 'operation',
            dataIndex: 'operation',
            editable: false,
            inputType: undefined,
            render: (_: undefined, record: DataType) => {
                const editable = isEditing(record);
                return editable ? (
                    <SaveCancelActions
                        saveRow={save}
                        cancelEditingRow={cancel}
                        record={record}

                    />
                ) : (
                    <EditDeleteActions
                        editingKey={editingKey}
                        editRow={editRow}
                        deleteRow={deleteRow}
                        record={record}
                    />
                );
            },
        },
    ];

    const mergedColumns: TableProps<DataType>['columns'] = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                inputType: col.inputType,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            <Table<DataType>
                components={{
                    body: { cell: EditableCell },
                }}
                bordered
                dataSource={props.data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{ onChange: cancel }}
            />
        </Form>
    );
};

export default EditableTable;
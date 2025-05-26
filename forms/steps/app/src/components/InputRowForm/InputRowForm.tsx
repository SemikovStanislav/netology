import {Button, Form} from "antd";
import type {IColumn, IRunningInfoRow} from "../common/interfaces.ts";
import {type Dispatch, type SetStateAction, useState} from "react";
import classes from "./input-row-form.module.css"
import {inputComponents} from "../common/inputComponents.tsx";
import FormItem from "../common/FormItem.tsx";

interface IInputRowForm<DataType extends IRunningInfoRow> {
    columns: IColumn<DataType>[]
    data: DataType[]
    setData: Dispatch<SetStateAction<DataType[]>>
}

const InputRowForm = <DataType extends IRunningInfoRow>(props: IInputRowForm<DataType>) => {
    const [form] = Form.useForm();
    const [nextKey, setNextKey] = useState(0);

    const formInitialValues = props.columns.reduce((acc, column) => {
        acc[column.dataIndex] = undefined;
        return acc;
    }, {} as Record<string, undefined>);

    const getNextKey = () => {
        const currentKey = `key-${nextKey}`;
        setNextKey(prev => prev + 1);
        return currentKey;
    }

    const getFormItems = () => {
        return props.columns.map((column: IColumn<DataType>) => (
            <FormItem
                name={column.dataIndex}
                title={column.title}
                showLabel={true}
            >
                {inputComponents[column.inputType]}
            </FormItem>
        ))
    }

    const onSubmit = async () => {
        try {
            const inputValues = (await form.validateFields()) as DataType;

            const existingIndex = props.data.findIndex(row => row.date.isSame(inputValues.date, 'day'))

            if (existingIndex !== -1) {
                props.setData(data => {
                    const updatedData = [...data]
                    updatedData[existingIndex] = {
                        ...updatedData[existingIndex],
                        distance: updatedData[existingIndex].distance + inputValues.distance
                    }

                    return updatedData
                })
            } else {
                props.setData(prevState => {
                    const updatedData = [
                        ...prevState,
                        {...inputValues, ...{key: getNextKey()}}
                    ];

                    updatedData.sort((a, b) => b.date.valueOf() - a.date.valueOf());

                    return updatedData;
                })
            }

            form.setFieldsValue(formInitialValues)
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    }

    return <div className={classes["input-row-form"]} >
        <Form form={form} component={false} layout={"horizontal"}>
            {getFormItems()}
            <Button type="primary" onClick={onSubmit}>Submit</Button>
        </Form>
    </div>
}

export default InputRowForm;
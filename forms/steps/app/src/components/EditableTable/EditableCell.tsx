import React from "react";
import {inputComponents} from "../common/inputComponents.tsx";
import FormItem from "../common/FormItem.tsx";
import type {InputType} from "../common/types.ts";
import type {IRow} from "../common/interfaces.ts";
import moment from 'moment';

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: string;
    inputType: InputType;
    record: IRow;
    index: number;
}



const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
                                                                                editing,
                                                                                dataIndex,
                                                                                title,
                                                                                inputType,
                                                                                record,
                                                                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                                                index,
                                                                                children,
                                                                                ...restProps
                                                                            }) => {

    const getUneditableNode = () => {
        if (inputType === "date" && record[dataIndex]) {
            return (record[dataIndex] as moment.Moment).format('DD.MM.YYYY');
        }

        return children;
    }

    return (
        <td {...restProps}>
            {editing ? (
                <FormItem
                    name={dataIndex}
                    title={title}
                >
                    {inputComponents[inputType]}
                </FormItem>
            ) : (
                getUneditableNode()
            )}
        </td>
    );
};

export default EditableCell;

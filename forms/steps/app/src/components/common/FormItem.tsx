import {Form} from "antd";

interface IFormItem {
    name?: string,
    title?: string,
    showLabel?: boolean,
    children?: React.ReactNode;
}

const FormItem = (props: IFormItem) => {
    return <Form.Item
        name={props.name}
        label={props.showLabel ? props.title : undefined}
        className={"margin-0"}
        layout="vertical"
        rules={[
            {
                required: true,
                message: `Please Input ${props.title}!`,
            },
        ]}
    >
        {props.children}
    </Form.Item>
}

export default FormItem;
import type {Dispatch, SetStateAction} from "react";

interface IInputHexColor {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const InputHexColor = ({value, setValue}: IInputHexColor) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 8) {
            setValue(e.target.value)
        }
    }

    return <input value={value} onChange={onChange} />
}

export default InputHexColor
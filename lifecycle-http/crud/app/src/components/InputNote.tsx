import {useState} from "react";

interface IInputNote {
    onClick: (value: string) => void;
}

const InputNote: React.FC<IInputNote> = ({onClick}) => {
    const [inputValue, setInputValue] = useState("")

    return <div className={"row align-items-flex-end"}>
        <div className={"col"}>
            <span>New Note</span>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={5}
            />
        </div>
        <button
            className={"unicode-button"}
            onClick={() => {setInputValue(''); onClick(inputValue)}}
        >▶️</button>
    </div>
}

export default InputNote;
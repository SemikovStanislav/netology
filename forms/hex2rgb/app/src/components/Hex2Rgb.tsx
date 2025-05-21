import InputHexColor from "./InputHexColor.tsx";
import {useState} from "react";
import CopyRGB from "./CopyBox.tsx";


const Hex2Rgb = () => {
    const [inputValue, setInputValue] = useState('');

    const isValidHex = (hex: string) => {
        return /^#[\da-fA-F]{6}$/.test(hex);
    }

    const getRGBValue = () => {
        if (inputValue.length < 7) {
            return undefined
        }

        if (!isValidHex(inputValue)) {
            return 'Ошибка!';
        }

        const cleaned = inputValue.trim().replace(/^#/, '');

        const r = parseInt(cleaned.slice(0, 2), 16);
        const g = parseInt(cleaned.slice(2, 4), 16);
        const b = parseInt(cleaned.slice(4, 6), 16);

        return `rgb(${r}, ${g}, ${b})`;
    }

    const getBackgroundColor = () => {
        if (isValidHex(inputValue)) {
            return inputValue;
        }
        if (inputValue.length == 7) {
            return "red";
        }
    }


    return <div style={{backgroundColor: getBackgroundColor()}} className="hex-to-rgb">
        <InputHexColor value={inputValue} setValue={setInputValue} />
        <CopyRGB value={getRGBValue()} />
    </div>
}

export default Hex2Rgb;
import { useState } from 'react';

interface ICopyRGB {
    value?: string;
}

const CopyRGB = ({ value }: ICopyRGB) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        const rgbPattern = /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/;

        if (typeof value === 'string' && rgbPattern.test(value)) {
            navigator.clipboard.writeText(value).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            });
        }
    };

    return (
        <div className="copy-wrapper" onClick={handleClick}>
            <input value={value} readOnly className="copy-rgb" />
            <div className={`tooltip ${copied ? 'visible' : ''}`}>
                {'Скопировано'}
            </div>
        </div>
    );
};

export default CopyRGB;
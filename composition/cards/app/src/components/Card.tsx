import React from 'react';
import type { ReactNode } from 'react';

interface CardProps {
    imageSrc?: string;
    imageAlt?: string;
    children?: ReactNode;
}


const Card: React.FC<CardProps> = ({
                                       imageSrc,
                                       imageAlt = 'Card image',
                                       children
                                   }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            {imageSrc && (
                <img
                    src={imageSrc}
                    className="card-img-top"
                    alt={imageAlt}
                />
            )}
            {children && (
                <div className="card-body">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Card;
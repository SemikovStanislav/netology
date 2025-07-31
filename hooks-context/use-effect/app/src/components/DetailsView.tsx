import React from 'react';
import './DetailsView.css';

interface IDetailsView {
    data: {
        id: number;
        name: string;
        avatar: string;
        details: {
            city: string;
            company: string;
            position: string;
        };
    };
}

const DetailsView: React.FC<IDetailsView> = ({ data }) => {
    return (
        <div className="card" key={data.id}>
            <img src={data.avatar} alt={data.name} className="card-img" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <div className="card-detail">City: {data.details.city}</div>
                <div className="card-detail">Company: {data.details.company}</div>
                <div className="card-detail">Position: {data.details.position}</div>
            </div>
        </div>
    );
};

export default DetailsView;

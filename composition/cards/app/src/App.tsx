import React from 'react';
import Card from './components/Card';
import "./App.css"

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Card
                imageSrc="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2848810/capsule_616x353.jpg?t=1711561612"
                imageAlt="Altushka"
            >
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </Card>

            <Card
                imageSrc="https://s0.rbk.ru/v6_top_pics/media/img/7/75/347472273420757.jpeg"
                imageAlt="Kotik"
            />

            <Card>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </Card>
        </div>
    );
};

export default App;
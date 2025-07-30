import { useState } from "react";
import Clock from "./components/Clock";
import TimezoneForm from "./components/TimezoneForm";
import "./App.css"

function App() {
    const [timezones, setTimezones] = useState<{ id: number; name: string; timezone: string }[]>([]);
    const [name, setName] = useState("");
    const [timezone, setTimezone] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleAdd = () => {
        if (!name.trim() || !timezone.trim()) {
            setError("Заполните оба поля");
            return;
        }

        const id = Date.now();

        setTimezones([...timezones, { id, name, timezone }]);
        setName("");
        setTimezone("");
        setError(null);
    };

    const handleDelete = (id: number) => {
        setTimezones(timezones.filter((tz) => tz.id !== id));
    };

    return (
        <div className="container">
            <TimezoneForm
                name={name}
                setName={setName}
                timezone={timezone}
                setTimezone={setTimezone}
                onAdd={handleAdd}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="clocks-row">
                {timezones.map((tz) => (
                    <Clock
                        key={tz.id}
                        name={tz.name}
                        timezone={tz.timezone}
                        onDelete={() => handleDelete(tz.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

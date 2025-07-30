interface ITimezoneForm {
    name: string
    setName: (value: string) => void
    timezone: string
    setTimezone: (value: string) => void
    onAdd: () => void
}

const TimezoneForm: React.FC<ITimezoneForm> = ({
                                                   name,
                                                   setName,
                                                   timezone,
                                                   setTimezone,
                                                   onAdd
                                               }) => {
    const gmtOffsets = Array.from({ length: 27 }, (_, i) => i - 12) // от -12 до +14

    return (
        <div className="form-row">
            <div>
                <label htmlFor="name">Название</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="timezone">Часовой пояс</label>
                <select id="timezone" value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                    <option value="">Выберите часовой пояс</option>
                    {gmtOffsets.map((offset) => {
                        const sign = offset >= 0 ? '+' : '';
                        return (
                            <option key={offset} value={`GMT${sign}${offset}`}>
                                GMT{sign}{offset}
                            </option>
                        );
                    })}
                </select>
            </div>

            <button onClick={onAdd}>Добавить</button>
        </div>


    )
}

export default TimezoneForm

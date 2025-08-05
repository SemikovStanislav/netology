import { Input } from 'antd';
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {selectFilmSearchQuery, setFilmSearchQuery} from "../model";

const { Search } = Input;

interface IFilmSearchInput {
    onSearch: (query: string) => void;
}

const FilmSearchInput: React.FC<IFilmSearchInput> = ({ onSearch }) => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(selectFilmSearchQuery)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilmSearchQuery(e.target.value))
    }

    const handleSearch = () => {
        if (value.trim()) {
            onSearch(value)
        }
    }

    return <Search
        value={value}
        onChange={handleChange}
        onSearch={handleSearch}
        placeholder="input search text"
        enterButton
    />
}

export default FilmSearchInput;
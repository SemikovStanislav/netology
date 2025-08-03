import { Input } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

interface IFilmSearch {
    onSearchChange: (value: string) => void;
}

const FilmSearch: React.FC<IFilmSearch> = ({onSearchChange}) => {

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        console.log(info?.source, value);
        onSearchChange(value);
    }

    return <Search placeholder="input search text" onSearch={onSearch} enterButton />
}

    export default FilmSearch;
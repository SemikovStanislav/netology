
interface INote {
    id: number,
    content: string,
    onDelete: (id: number) => void,
}

const Note: React.FC<INote> = ({id , content, onDelete}) => {
    return <li id={id.toString()}>
        <div className={"note"}>{content} <button onClick={() => {onDelete(id)}}>X</button></div>

    </li>
}

export default Note
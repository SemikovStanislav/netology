import Note from "./Note.tsx";

interface INotes {
    notes: {
        id: number,
        content: string,
    }[]
    onDelete: (id: number) => void,
}

const Notes: React.FC<INotes> = ({notes, onDelete}) => {
    return <ul className={"notes"}>
        {notes.map((note) => <Note id={note.id} content={note.content} onDelete={onDelete}/>)}
    </ul>
}

export default Notes;
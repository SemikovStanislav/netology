import {useEffect, useState} from 'react'
import './App.css'
import Notes from "./components/Notes.tsx";
import InputNote from "./components/InputNote.tsx";

function App() {
    const [notes, setNotes] = useState<{id: number, content: string}[]>([])

    const fetchNotes = async () => {
        try {
            const response = await fetch('http://localhost:7070/notes')
            if (!response.ok) {
                throw new Error('Failed to fetch notes')
            }
            const data = await response.json()
            setNotes(data)
        } catch (error) {
            console.error('Ошибка при загрузке заметок:', error)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    const handleDeleteNote = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:7070/notes/${id}`, {method: 'DELETE'})
            if (!response.ok) {
                throw new Error('Failed to delete note');
            }
        } catch (error) {
            console.error('Ошибка при удалении заметки:', error);
        } finally {
            fetchNotes()
        }
    }

    const handleAddNote = async (note: string) => {
        try {
            const response = await fetch(
                'http://localhost:7070/notes',
                {
                    method: 'POST',
                    body: JSON.stringify({ content: note })

        })

            if (!response.ok) {
                throw new Error('Failed to add note')
            }
        } catch (error) {
            console.error('Ошибка при добавлении заметки:', error);
        } finally {
            fetchNotes()
        }
    }

    return (
        <>
            <div className="row align-items-baseline">
                <h1>Notes</h1>
                <button className={"unicode-button"} onClick={fetchNotes}>🔄</button>
            </div>

            <Notes notes={notes} onDelete={handleDeleteNote} />
            <br/>
            <div className="row">
                <InputNote onClick={handleAddNote} />
            </div>

        </>
    )
}

export default App

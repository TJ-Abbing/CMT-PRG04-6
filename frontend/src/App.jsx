import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./components/Notes";
import { NoteCreate } from "./components/NoteCreate";
import { NoteDetails } from "./components/NoteDetais";
import { NoteEdit } from "./components/NoteEdit";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Notes /> }></Route>
                <Route path="/create" element={ <NoteCreate /> }></Route>
                <Route path="/note/:NoteId" element={ <NoteDetails /> }></Route>
                <Route path="/note/:NoteId/edit/" element={ <NoteEdit /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./components/Notes";
import { CreateNote } from "./components/CreateNote";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Notes /> }></Route>
                <Route path="/create" element={ <CreateNote /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
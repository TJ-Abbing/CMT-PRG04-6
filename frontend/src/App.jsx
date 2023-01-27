import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./notes/Notes";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Notes /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
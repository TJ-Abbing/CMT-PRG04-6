import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Songs } from "./components/Songs";
import { CreateSong } from "./components/CreateSong";
import { SongDetail } from "./components/SongDetail";
import { EditSong } from "./components/EditSong";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Songs /> }></Route>
                <Route path="/create" element={ <CreateSong /> }></Route>
                <Route path="/song/:songId" element={ <SongDetail /> }></Route>
                <Route path="/song/:songId/edit/" element={ <EditSong /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
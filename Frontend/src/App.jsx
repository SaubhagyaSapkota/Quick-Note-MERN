import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import CreatePage from "./components/CreatePage";
import NoteDetailsPage from "./components/NoteDetailsPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;

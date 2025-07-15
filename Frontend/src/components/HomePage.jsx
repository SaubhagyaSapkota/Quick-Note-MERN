import "../styles/HomePage.css";
import NavbarHome from "./Navbar";

const HomePage = () => {
  return (
    <>
      <NavbarHome />
      <div className="note-container">
        <div className="note-1">NoteCard1</div>
        <div className="note-2">NoteCard2</div>
      </div>
    </>
  );
};

export default HomePage;

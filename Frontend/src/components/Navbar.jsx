import { Link } from "react-router";
import "../styles/navbarHome.css";
import toast from "react-hot-toast";
import { PlusIcon } from "lucide-react";

const NavbarHome = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="app-title">
          think<span className="sec-title">Board</span>
        </div>
        <div className="button-containeer">
          <Link to={"/create"} style={{ textDecoration: "none" }}>
            <button className="button-main">
              <PlusIcon className="plus-icon" />
              <span className="button-text">New Note</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;

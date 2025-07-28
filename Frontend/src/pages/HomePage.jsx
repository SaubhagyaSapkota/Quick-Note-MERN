import { useState } from "react";
import NavbarHome from "../components/Navbar";
import RateLimitedUI from "../components/rateLimiter";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([])
  return (
    <div className="min-h-screen">
      <NavbarHome />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;



import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { RxExit } from "react-icons/rx";
import { BsFillCaretDownFill } from "react-icons/bs";


export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logout functionality
  const logout = async () => {
    await axios.post("/logout");
    setUser(null);
  };

  return (
    <header className="flex py-2 px-6 sm:px-6 justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src="data:image/png;base64,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" alt="Logo" className="w-26 h-9" />
      </Link>

      {/* User Logged In State */}
      {!!user ? (
        <div className="flex items-center gap-2 sm:gap-8 ml-auto">
          <div className="flex items-center gap-2">
            <Link to="/useraccount">{user.name.toUpperCase()}</Link>
            <BsFillCaretDownFill
              className="h-5 w-5 cursor-pointer hover:rotate-180 transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          <div className="hidden md:flex">
            <Link
              to="/login"
              className="flex hover:bg-background hover:shadow py-2 pl-6 pr-8  rounded-lg"
            >
              <button
                onClick={logout}
                className="secondary flex items-center gap-2"
              >
                <div>Log out</div>
                <RxExit />
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute z-10 mt-64 flex flex-col w-48 bg-white right-2 md:right-[160px] rounded-lg shadow-lg">
              <nav className="font-semibold text-[16px]">
                <Link
                  to="/calendar"
                  className="flex hover:bg-background hover:shadow py-2 pl-6 pr-8 rounded-lg"
                >
                  Dashbord
                </Link>
                <Link
                  to="/login"
                  className="flex hover:bg-background hover:shadow py-2 pl-6 pr-8  rounded-lg"
                >
                  Log out
                </Link>
              </nav>
            </div>
          )}
        </div>
      ) : (
        // If user is not logged in
        <div className="ml-auto">
          <Link to="/login">
            <button className="primary">
              <div>Sign in</div>
            </button>
          </Link>
        </div>
      )}
      <hr />
    </header>
  );
}

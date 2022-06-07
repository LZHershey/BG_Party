import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div className="nav-links">
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <a href="#" onClick={() => dispatch(logout())}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="nav-links">
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
 let location = useLocation();
//  React.useEffect(() => {
//  console.log(location.pathname)
//  }, [location]);
const navigate=useNavigate();
const handalClick=()=>{
  localStorage.removeItem('tokan')
  navigate('/login');
}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/aboute" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {/* using Ternari Operato for true or false */}
            {!localStorage.getItem("tokan") ? (
              <form className="d-flex" role="search">
                <Link to="/login" className="btn btn-primary mx-3">
                  LogIn
                </Link>
                <Link to="/signin" className="btn btn-primary">
                  SignIn
                </Link>
              </form>
            ) : (
              <button className="btn btn-primary" onClick={handalClick}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

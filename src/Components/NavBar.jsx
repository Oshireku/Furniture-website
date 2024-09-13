import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar  fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a href="www.google.com" className="navbar-brand">
          <img className="brand-icon" src="/favicon.ico" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end offcanvas-start w+75 show sidebar"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img className="brand-icon" src="../public/favicon.ico" alt="" />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="Living" className="nav-link">
                  Living Room
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Dining" className="nav-link">
                  Dining
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Kitchen" className="nav-link">
                  Kitchen
                </Link>
              </li>
              <li className="nav-item">
                <Link to="BedRoom" className="nav-link">
                  Bed Room
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Office" className="nav-link">
                  Office
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Account" className="nav-link">
                  <AccountCircleOutlinedIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Cart" className="nav-link">
                  <ShoppingCartOutlinedIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

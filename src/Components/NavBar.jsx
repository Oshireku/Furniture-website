import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function NavBar() {
  return (
    <nav className="navbar  fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a href="www.google.com" className="navbar-brand">
          <img className="brand-icon" src="../public/favicon.ico" alt="" />
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
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="Living" className="nav-link">
                  Living Room
                </a>
              </li>
              <li className="nav-item">
                <a href="Dining" className="nav-link">
                  Dining
                </a>
              </li>
              <li className="nav-item">
                <a href="Kitchen" className="nav-link">
                  Kitchen
                </a>
              </li>
              <li className="nav-item">
                <a href="BedRoom" className="nav-link">
                  Bed Room
                </a>
              </li>
              <li className="nav-item">
                <a href="Office" className="nav-link">
                  Office
                </a>
              </li>
              <li className="nav-item">
                <a href="Account" className="nav-link">
                  <AccountCircleOutlinedIcon />
                </a>
              </li>
              <li className="nav-item">
                <a href="Cart" className="nav-link">
                  <ShoppingCartOutlinedIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

// function NavBar() {
//   return (
//     <nav className="navbar  fixed-top navbar-expand-lg">
//       <ul>
//         <li className="nav-item">boy</li>
//         <li className="nav-item">girl</li>
//         <li className="nav-item">child</li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

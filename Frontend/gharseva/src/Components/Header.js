import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div className="Header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GharSeva</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 p-1 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
              <li className="nav-item mx-2">
              <Link to="/" style={{ textDecoration: "none" }}><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
              </li>
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">Cook</a></li>
                  <li><a className="dropdown-item" href="#">Maid</a></li>
                  <li><a className="dropdown-item" href="#">Home Appliances</a></li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link disabled" aria-disabled="true">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link disabled" aria-disabled="true">Contact Us</a>
              </li>
            </ul>
            <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
              <li className="nav-item mx-2">
              <Link to="signin"><button className="btn btn-outline-primary" type="submit">sign in</button></Link>
              
              </li>
              <li className="nav-item">
              <Link to="signup"><button className="btn btn-outline-primary" type="submit">sign up</button></Link>
              </li>
            </ul>
            
            
          </div>
        </div>
      </nav>
        </div>
     );
}

export default Header;
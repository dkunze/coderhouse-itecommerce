function NavBar() {
  return (
    <div>
      <div className="row">
        <img
          src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
          alt="Company Logo"
          width="100"
        />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Quienes Somos
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#!">
                  Computadoras
                </a>
                <a className="dropdown-item" href="#!">
                  Monitores
                </a>
                <a className="dropdown-item" href="#!">
                  Celulares
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

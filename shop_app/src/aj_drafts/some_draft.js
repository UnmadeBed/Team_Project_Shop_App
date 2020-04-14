<header className="NavBar">
  <ul>
    <li className="navLink" onClick={this.handleClickAllSneakers}>
      <Link to="/sneakers">All Sneakers</Link>
    </li>

    <li className="navLink" onClick={this.handleClickMen}>
      <Link to="/men">Men</Link>
    </li>

    <li className="navLink" onClick={this.handleClickWomen}>
      <Link to="/women">Women</Link>
    </li>
    <li className="navLink" onClick={this.handleClickKids}>
      <Link to="/kids">Kids</Link>
    </li>
    <li className="navLink">
      <Link to="/newreleases">New Releases</Link>
    </li>
    <li className="navLink">
      <Link to="/login">{this.props.name}</Link>
    </li>

    <li className="navLink">
      <Link to="/basket">Basket</Link>
    </li>
    {mydetails}

  </ul>

</header>

import { Link } from 'react-router-dom';

export const NavbarComp = () => {
  return (
    <header className="topnav">
      <h1><Link className="active" to="/">Home</Link></h1>
      <h1><Link to="/about">About</Link></h1>
      <h1><Link to="/catalog">Catalog</Link></h1>
      <h1><Link to="/login">Logins</Link></h1>
      <h1><Link to="/register">Register</Link></h1>
    </header>
  );
};
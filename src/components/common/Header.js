import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: 'green' }

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> |&nbsp;
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink> |&nbsp;
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  )
}

// function Header() {
//   return (
//     <nav>
//       <Link to="/">Home</Link> |&nbsp;
//       <Link to="/courses">Courses</Link> |&nbsp;
//       <Link to="/about">About</Link>
//     </nav>
//   )
// }

export default Header;

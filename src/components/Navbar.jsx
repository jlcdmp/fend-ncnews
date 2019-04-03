import React from 'react';
import { Link } from '@reach/router'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <Link to='/home' className='navlink' >home</Link>
      {"    "}
      <Link to='/articles' className='navlink' >articles</Link>
      {"    "}

      <Link to='/topcs' className='navlink'>topics</Link>
      {"    "}

      <Link to='/newarticle' className='navlink'>post</Link>
    </nav>
  );
}

export default Navbar;
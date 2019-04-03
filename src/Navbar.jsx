import React from 'react';
import { Link } from '@reach/router'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navlink' >Home</Link>
      <Link to='/articles' className='navlink' >Articles</Link>
      <Link to='/topics' className='navlink'  >Topics</Link>
      <Link to='users/:user_id' className='navlink'  >Profile</Link>
      <Link to='' className='navlink'>Settings</Link>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from '@reach/router'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <Link to='/home' className='navlink' >
        home
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" /></svg>
      </Link>
      {"    "}
      <Link to='/articles' className='navlink' >
        articles
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z" /></svg>
      </Link>
      {"    "}
      topics
      <Link to='/topics' className='navlink'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
      </Link>
      {"    "}
      <Link to='/newarticle' className='navlink'>
        post
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.963 8.261c-.566-.585-.536-1.503.047-2.07l5.948-5.768c.291-.281.664-.423 1.035-.423.376 0 .75.146 1.035.44l-8.065 7.821zm-9.778 14.696c-.123.118-.185.277-.185.436 0 .333.271.607.607.607.152 0 .305-.057.423-.171l.999-.972-.845-.872-.999.972zm10.938-8.655l-3.417 3.319c-1.099 1.065-2.145 1.771-3.607 2.387.66-1.445 1.398-2.469 2.498-3.535l3.416-3.317-1.388-1.433-3.419 3.314c-1.837 1.781-2.774 3.507-3.64 5.916l1.509 1.559c2.434-.79 4.187-1.673 6.024-3.455l3.418-3.315-1.394-1.44zm8.864-11.356l-7.371 7.148 1.653 1.706 7.369-7.146c1.133-1.097-.547-2.776-1.651-1.708zm4.013.855c0 .833-.324 1.665-.97 2.291l-8.806 8.538-4.436-4.579 8.806-8.54c.645-.625 1.423-.903 2.187-.903 1.646-.001 3.219 1.291 3.219 3.193z" /></svg>
      </Link>
      {"    "}
      logout
      <Link to='/' className='navlink'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22h-20v-7h2v5h16v-16h-16v5h-2v-7h20v20zm-13-11v-4l6 5-6 5v-4h-11v-2h11z" /></svg>
      </Link>
    </nav>
  );
}

export default Navbar;
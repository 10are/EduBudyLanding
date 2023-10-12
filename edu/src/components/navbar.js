import React from 'react';

function Navbar() {
  const eduBudyStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navLinkStyle = {
    color: 'limegreen',
    fontSize: '24px',
    fontWeight: 'bold',

  };

  return (
    <header>
      <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
        <div style={eduBudyStyle}>EduBudy</div>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto shadow-2xl ">
          {/* <a
            href="#_"
            className="mr-5 font-medium hover:text-gray-900"
            style={navLinkStyle}
          >
            Home
          </a>
          <a
            href="#_"
            className="mr-5 font-medium hover:text-gray-900"
            style={navLinkStyle}
          >
            About
          </a>
          <a
            href="#_"
            className="font-medium hover:text-gray-900"
            style={navLinkStyle}
          >
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

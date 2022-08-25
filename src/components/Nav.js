import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('About Me')}
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;


// import React from 'react';

// export default function Nav() {
//   const linkStyle = { padding: '15px' };

//   return (
//     <nav className="main-header-menu">
//       <section
//         style={{
//           display: 'flex',
//           fontFamily: 'helvetica',
//           fontSize: 32,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: 5,
//         }}
//       >
//         <div style={linkStyle}>
//           <a href="#">About Me</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Portfolio</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Contact</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Resume</a>
//         </div>
//       </section>
//     </nav>
//   );
// }


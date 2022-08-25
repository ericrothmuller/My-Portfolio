import React from 'react';

export default function Nav() {
  const linkStyle = { padding: '15px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          fontSize: 32,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
        }}
      >
        <div style={linkStyle}>
          <a href="#">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}

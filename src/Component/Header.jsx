import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home'); // Initialize with the default active link

  useEffect(() => {
    const header = document.getElementById('header');
    if (header && activeLink !== 'Home') {
      header.classList.add('header-top');
    } else {
      header.classList.remove('header-top');
    }
  }, [activeLink]);

  

  const handleSetActive = (link) => {
    setActiveLink(link);

    // Convert link to lowercase to match section id
    const sectionId = link.toLowerCase(); // Assuming section id matches link text (e.g., 'home', 'about')

    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        if (section.id === sectionId) {
            // Add class 'section-show' to the active section
            section.classList.add('section-show');
            console.log(sectionId);
        } else {
            // Remove class 'section-show' from inactive sections
            section.classList.remove('section-show');
        }
    })

    
    
  };

  return (
   
  <header id="header">
    <div className="container">

      <h1><a href="/">Emily Jones</a></h1>
      <h1><a href="/">Emily Jones</a></h1>
    
    
      <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

      <nav id="navbar" className="navbar">
        
      <ul>
      <li><a className={activeLink === 'Home' ? 'nav-link active' : 'nav-link'} href="#header" onClick={() => handleSetActive('Home')}>Home</a></li>
      <li><a className={activeLink === 'About' ? 'nav-link active' : 'nav-link'} href="#about" onClick={() => handleSetActive('About')}>About</a></li>
      <li><a className={activeLink === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handleSetActive('Resume')}>Resume</a></li>
      <li><a className={activeLink === 'Services' ? 'nav-link active' : 'nav-link'} href="#services" onClick={() => handleSetActive('Services')}>Services</a></li>
      <li><a className={activeLink === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={() => handleSetActive('Portfolio')}>Portfolio</a></li>
      <li><a className={activeLink === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handleSetActive('Contact')}>Contact</a></li>
    </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <div className="social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
    
  );
}

export default Header;

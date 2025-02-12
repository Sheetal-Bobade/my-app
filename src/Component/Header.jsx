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

    // Convert link to lowercase to match section class
    const sectionClass = activeLink.toLowerCase(); // Assuming section class matches link text (e.g., 'home', 'about')

    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        if (section.classList.contains(sectionClass)) {
            // Add class 'show-section' to the active section
            section.classList.add('section-show');
        } else {
            // Remove class 'show-section' from inactive sections
            section.classList.remove('section-show');
        }
    });

  }, [activeLink]);

  
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleMobileNavToggle = () => {
    setNavbarMobile(!navbarMobile);
    setToggleIcon(!toggleIcon);
  };

  const handleSetActive = (link, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveLink(link);

    // Set the URL hash
    //window.location.hash = link.toLowerCase();

     // Remove mobile menu and switch icon back to bi-list
     setNavbarMobile(false);
     setToggleIcon(false);
  };


  return (
    <header id="header">
      <div className="container">
        <h1><a href="/">Sheetal Bobade</a></h1>
        <h2>I'm a passionate <span>Web Developer</span></h2>
        <nav id="navbar" className={`navbar ${navbarMobile ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><a className={activeLink === 'Home' ? 'nav-link active' : 'nav-link'} href="#header" onClick={(e) => handleSetActive('Home', e)}>Home</a></li>
            <li><a className={activeLink === 'About' ? 'nav-link active' : 'nav-link'} href="#about" onClick={(e) => handleSetActive('About', e)}>About</a></li>
            <li><a className={activeLink === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={(e) => handleSetActive('Resume', e)}>Resume</a></li>
            <li><a className={activeLink === 'Services' ? 'nav-link active' : 'nav-link'} href="#services" onClick={(e) => handleSetActive('Services', e)}>Services</a></li>
            <li><a className={activeLink === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={(e) => handleSetActive('Portfolio', e)}>Portfolio</a></li>
            <li><a className={activeLink === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={(e) => handleSetActive('Contact', e)}>Contact</a></li>
          </ul>
          <i
            className={`bi ${toggleIcon ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            onClick={handleMobileNavToggle}
          ></i>
        </nav>
        <div className="social-links">
          <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="/" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

    </header>
  );
}

export default Header;

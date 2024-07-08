import React, { useState, useEffect } from 'react';


const Main = () => {
 

  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      if (activeFilter === '*' || item.classList.contains(activeFilter.substring(1))) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  

  return (
    
  <>

  <section id="about" className="section about">
          <div className="about-me container">

              <div className="section-title">
                  <h2>About</h2>
                  <p>Learn more about me</p>
              </div>

              <div className="row">
                  <div className="col-lg-4" data-aos="fade-right">
                      <img src="assets/img/me.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                      <h3>UI/UX &amp; Graphic Designer</h3>
                      <p className="fst-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                      </p>
                      <div className="row">
                          <div className="col-lg-6">
                              <ul>
                                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                              </ul>
                          </div>
                          <div className="col-lg-6">
                              <ul>
                                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                              </ul>
                          </div>
                      </div>
                      <p>
                          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                      </p>
                  </div>
              </div>

          </div>

          <div className="counts container">

              <div className="row">

                  <div className="col-lg-3 col-md-6">
                      <div className="count-box">
                          <i className="bi bi-emoji-smile"></i>
                          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Happy Clients</p>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                      <div className="count-box">
                          <i className="bi bi-journal-richtext"></i>
                          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Projects</p>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                      <div className="count-box">
                          <i className="bi bi-headset"></i>
                          <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Hours Of Support</p>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                      <div className="count-box">
                          <i className="bi bi-award"></i>
                          <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Awards</p>
                      </div>
                  </div>

              </div>

          </div>

          <div className="skills container">

              <div className="section-title">
                  <h2>Skills</h2>
              </div>

              <div className="row skills-content">

                  <div className="col-lg-6">

                      <div className="progress">
                          <span className="skill">HTML <i className="val">100%</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                      <div className="progress">
                          <span className="skill">CSS <i className="val">90%</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                      <div className="progress">
                          <span className="skill">JavaScript <i className="val">75%</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                  </div>

                  <div className="col-lg-6">

                      <div className="progress">
                          <span className="skill">PHP <i className="val">80%</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                      <div className="progress">
                          <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                      <div className="progress">
                          <span className="skill">Photoshop <i className="val">55%</i></span>
                          <div className="progress-bar-wrap">
                              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                  </div>

              </div>

          </div>

          <div className="interests container">

              <div className="section-title">
                  <h2>Interests</h2>
              </div>

              <div className="row">
                  <div className="col-lg-3 col-md-4">
                      <div className="icon-box">
                          <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
                          <h3>Lorem Ipsum</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                      <div className="icon-box">
                          <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
                          <h3>Dolor Sitema</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                      <div className="icon-box">
                          <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
                          <h3>Sed perspiciatis</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                      <div className="icon-box">
                          <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
                          <h3>Magni Dolores</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
                          <h3>Nemo Enim</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
                          <h3>Eiusmod Tempor</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
                          <h3>Midela Teren</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
                          <h3>Pira Neve</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
                          <h3>Dirada Pack</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-disc-line" style={{color: "#b20969"}}></i>
                          <h3>Moton Ideal</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
                          <h3>Verdo Park</h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                          <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
                          <h3>Flavor Nivelanda</h3>
                      </div>
                  </div>
              </div>

          </div>

          <div className="testimonials container">

              <div className="section-title">
                  <h2>Testimonials</h2>
              </div>

              <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                  <div className="swiper-wrapper">

                      <div className="swiper-slide">
                          <div className="testimonial-item">
                              <p>
                                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                              </p>
                              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                              <h3>Saul Goodman</h3>
                              <h4>Ceo &amp; Founder</h4>
                          </div>
                      </div>
                      <div className="swiper-slide">
                          <div className="testimonial-item">
                              <p>
                                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                              </p>
                              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                              <h3>Sara Wilsson</h3>
                              <h4>Designer</h4>
                          </div>
                      </div>

                      <div className="swiper-slide">
                          <div className="testimonial-item">
                              <p>
                                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                              </p>
                              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                              <h3>Jena Karlis</h3>
                              <h4>Store Owner</h4>
                          </div>
                      </div>

                      <div className="swiper-slide">
                          <div className="testimonial-item">
                              <p>
                                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                              </p>
                              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                              <h3>Matt Brandon</h3>
                              <h4>Freelancer</h4>
                          </div>
                      </div>

                      <div className="swiper-slide">
                          <div className="testimonial-item">
                              <p>
                                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                              </p>
                              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                              <h3>John Larson</h3>
                              <h4>Entrepreneur</h4>
                          </div>
                      </div>

                  </div>
                  <div className="swiper-pagination"></div>
              </div>

              <div className="owl-carousel testimonials-carousel">

              </div>

          </div>

      </section><section id="resume" className=" section resume">
              <div className="container">

                  <div className="section-title">
                      <h2>Resume</h2>
                      <p>Check My Resume</p>
                  </div>

                  <div className="row">
                      <div className="col-lg-6">
                          <h3 className="resume-title">Sumary</h3>
                          <div className="resume-item pb-0">
                              <h4>Alice Barkley</h4>
                              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                              
                                  <ul>
                                      <li>Portland par 127,Orlando, FL</li>
                                      <li>(123) 456-7891</li>
                                      <li>alice.barkley@example.com</li>
                                  </ul>
                           
                          </div>

                          <h3 className="resume-title">Education</h3>
                          <div className="resume-item">
                              <h4>Master of Fine Arts &amp; Graphic Design</h4>
                              <h5>2015 - 2016</h5>
                              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                          </div>
                          <div className="resume-item">
                              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                              <h5>2010 - 2014</h5>
                              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <h3 className="resume-title">Professional Experience</h3>
                          <div className="resume-item">
                              <h4>Senior graphic design specialist</h4>
                              <h5>2019 - Present</h5>
                              <p><em>Experion, New York, NY </em></p>
                              
                                  <ul>
                                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                  </ul>
                              
                          </div>
                          <div className="resume-item">
                              <h4>Graphic design specialist</h4>
                              <h5>2017 - 2018</h5>
                              <p><em>Stepping Stone Advertising, New York, NY</em></p>
                            
                                  <ul>
                                      <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                      <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                      <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                  </ul>
                             
                          </div>
                      </div>
                  </div>

              </div>
          </section>

          <section id="services" className="section services">
    <div className="container">

      <div className="section-title">
        <h2>Services</h2>
        <p>My Services</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4><a href="/">Lorem Ipsum</a></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-file"></i></div>
            <h4><a href="/">Sed ut perspiciatis</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4><a href="/">Magni Dolores</a></h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4><a href="/">Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-slideshow"></i></div>
            <h4><a href="/">Dele cardo</a></h4>
            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"></i></div>
            <h4><a href="/">Divera don</a></h4>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
        </div>

      </div>

    </div>
  </section>


  <section id="portfolio" className="section portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
      <li 
        data-filter="*" 
        className={`filter ${activeFilter === '*' ? 'filter-active' : ''}`} 
        onClick={() => handleFilterClick('*')}
      >
        All
      </li>
      <li 
        data-filter=".filter-app" 
        className={`filter ${activeFilter === '.filter-app' ? 'filter-active' : ''}`} 
        onClick={() => handleFilterClick('.filter-app')}
      >
        App
      </li>
      <li 
        data-filter=".filter-card" 
        className={`filter ${activeFilter === '.filter-card' ? 'filter-active' : ''}`} 
        onClick={() => handleFilterClick('.filter-card')}
      >
        Card
      </li>
      <li 
        data-filter=".filter-web" 
        className={`filter ${activeFilter === '.filter-web' ? 'filter-active' : ''}`} 
        onClick={() => handleFilterClick('.filter-web')}
      >
        Web
      </li>
    </ul>
        </div>
      </div>

      <div className="row portfolio-container">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="/portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="./portfolio-details.jsx" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>


  <section id="contact" className="section contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div className="row mt-2">

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-map"></i>
            <h3>My Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div className="social-links">
              <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="/" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="/" className="google-plus"><i className="bi bi-skype"></i></a>
              <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-envelope"></i>
            <h3>Email Me</h3>
            <p>contact@example.com</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <p>+1 5589 55488 55</p>
          </div>
        </div>
      </div>

      <form className="php-email-form mt-4">
        <div className="row">
          <div className="col-md-6 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
          </div>
        </div>
        <div className="form-group mt-3">
          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </section>
          
          </>

  
  );
}

export default Main;

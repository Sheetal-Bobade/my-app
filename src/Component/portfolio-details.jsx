import React from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style.css';



function PortfolioDetails() {
  return (

    <>
    <div class="container">

<div class="row">

  <div class="col-lg-8">
    <h2 class="portfolio-title">This is an example of portfolio detail</h2>

    
    <Swiper className="portfolio-details-slider"
    modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div class="swiper-slide">
        <img src="assets/img/portfolio/portfolio-details-1.jpg" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="swiper-slide">
        <img src="assets/img/portfolio/portfolio-details-2.jpg" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="swiper-slide">
        <img src="assets/img/portfolio/portfolio-details-3.jpg" alt="" />
        </div>
      </SwiperSlide>
      

    </Swiper>
    </div>
    
    
            
              

       

          <div class="col-lg-4 portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: Web design</li>
              <li><strong>Client</strong>: ASU Company</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong>: <a href="/">www.example.com</a></li>
            </ul>

            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. 
              Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia 
              accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>

        
      </div>
      </div>

      </>
    
  );
};

export default PortfolioDetails
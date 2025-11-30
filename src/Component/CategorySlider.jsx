import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';


// import required modules

export default function CategorySlider() {



  let[showPerPage,setShowPerPage]=useState(6)
//   useEffect(()=>{
// setShowPerPage(()=>{
//   if(window.innerWidth<500)
//   return 2
// })
//   },[window.innerWidth])
function handaleWindowResize(){
if(window.innerWidth<576)
  setShowPerPage(2)
else if(window.innerWidth<768)
  setShowPerPage(3)
else if(window.innerWidth<992)
  setShowPerPage(4)
else if(window.innerWidth<1200)
  setShowPerPage(5)
else 
setShowPerPage(6)
}
window.addEventListener("resize",handaleWindowResize);

let options={
  slidesPerView:showPerPage,
        spaceBetween:50,
        freeMode:true,
        loop:true,
        pagination:{
          clickable: true,
        },
        modules:[FreeMode, Pagination],
        className:"mySwiper"
}

  return (
<>
  <section id="clients" className="clients section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Clients</h2>
        <p>We work with best clients<br/></p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

  <Swiper {...options}>
                 
            <SwiperSlide><img src="assets/img/clients/client-1.png"  style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-2.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-3.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-4.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-5.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-6.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-7.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
            <SwiperSlide><img src="assets/img/clients/client-8.png" style={{height:80}}  className="img-fluid" alt=""/></SwiperSlide>
       
          <div className="swiper-pagination"></div>
        </Swiper>

      </div>

    </section>

</>
  )
}

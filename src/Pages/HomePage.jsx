import React from 'react'
import About from '../Component/About'
import Value from '../Component/Value'
import Fact from '../Component/Fact'
import Feature from '../Component/Feature'
import ProductSlider from '../Component/ProductSlider'
import Product from '../Component/Product'
import Testimonials from '../Component/Testimonials'
import CategorySlider from '../Component/CategorySlider'
// import Breadcrum from '../Component/Breadcrum'

export default function HomePage() {
  return (
   <>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button> */}
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We offer modern and top brands product for male </h1>
            <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands </p>
            <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Shop Now <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/banner/b10.jpg" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
          </div>


    <div className="carousel-item">
      <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We offer modern and top brands product for female</h1>
            <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands </p>
            <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Shop Now <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/banner/b9.jpg" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
    </div>
    
    
    <div className="carousel-item">
      <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We offer modern and top brands product for kids</h1>
            <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands </p>
            <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Shop Now <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/banner/b11.jpg" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
    </div>
    
{/*     
    <div className="carousel-item">
      <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We offer modern and top brands product for male</h1>
            <p data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Shop Now <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/banner/b12.jpg" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
    </div> */}
    
  </div>



{/* button.............. */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className=" carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden ">Next</span>
  </button>
</div>

{/* hero section...................... */}
{/* 
    <section id="hero" className="hero section">

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
            <p data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Get Started <i className="bi bi-arrow-right"></i></a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section> */}
    {/* <Breadcrum title="jdf" /> */}
    <About/>
     <Value/>
     <Fact/>
    <Feature/> 
    <ProductSlider/>
    <Product/>
    <Testimonials/>
  <CategorySlider/>
   </>
  )
}

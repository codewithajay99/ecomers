import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'
import FeaturesPage from './Pages/FeaturesPage'
import TestimonialPage from './Pages/TestimonialPage'
import ContactUsPage from './Pages/ContactUsPage'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/features' element={<FeaturesPage/>}/>
      <Route path='/testimonials' element={<TestimonialPage/>}/>
      <Route path='/contactus' element={<ContactUsPage/>}/>
 
     
    </Routes>
<Footer/>    
    </BrowserRouter>
  )
}

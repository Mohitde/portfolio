import React from 'react';
import './projoect.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import SwiperCore, {
    EffectCoverflow,Pagination,Autoplay
  } from 'swiper';
const Project =()=>{
    const data=[{
        image:'assets/project1.png',
        link:'https://rianamilne.com/'
    },
    {
        image:'assets/project2.png',
        link:'https://smiledentalcarecentre.com/'
    },
    {
        image:'assets/project3.png',
        link:'https://poc.fgrade.net/smartbrix/'
    },
    {
        image:'assets/project4.png',
        link:'https://luminaglow.com/'
    },
    {
        image:'assets/project5.png',
        link:'https://denmarkhotel.net.au/bar-and-restaurant'
    },

    {
        image:'assets/project6.png',
        link:'https://ingrossocbd.it/'
    },
    {
        image:'assets/project7.png',
        link:'https://www.dresskorner.com/'
    },
    {
        image:'assets/project8.png',
        link:'https://auditions.mydigitalsketch.com/academy/'
    },
    {
        image:'assets/project9.png',
        link:'https://www.harbortouchpos.com/'
    },
    {
        image:'assets/project10.png',
        link:'https://fotodetinder.com/'
    }

    ]
    SwiperCore.use([Autoplay,EffectCoverflow,Pagination]);
    return(
        <>
        <section className="projects">
        <h1>Projects</h1>
 <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'4'} coverflowEffect={{
  "rotate": 20,
  "stretch": 0,
  "depth": 200,
  "modifier": 1,
  "slideShadows": true
}} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}}  pagination={{clickable:true}} loop={true} className="mySwiper">

{data.map((cv)=>{
    return(
    <SwiperSlide> <a href={cv.link} target="_blank"><img src={cv.image}/></a> </SwiperSlide>
    )
})}
 
  </Swiper>
  </section>

        </>
    )
}

export default Project;
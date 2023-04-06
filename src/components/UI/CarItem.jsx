import React, { useRef, useState } from 'react';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import cardata from '../../assets/data/carData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const CarItem = (props) => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  // const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return(
    <Swiper
    spaceBetween={30}
    effect={"slide"}
    navigation={true}
    pagination={{
      dynamicBullets: true,
      clickable: true,
    }}
    breakpoints={{
        640: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 3
        }}}
    modules={[ Navigation, Pagination]}
    className="mySwiper"
  >
  
       {
    cardata.map(({imgUrl, model, Availability, carName, automatic, speed, price}) => {
      return(
        <SwiperSlide>
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h3 className="section__title text-center">{Availability}</h3>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    
      </SwiperSlide>)
    })}
    </Swiper>)
    
};

export default CarItem;


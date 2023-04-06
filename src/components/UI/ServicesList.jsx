import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ServicesList = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ServiceItem = ({ item }) => (

    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__item">
        <span className="mb-3 d-inline-block">
          <i class={item.icon} />
        </span>
  
        <h6>{item.title}</h6>
        <p className="section__description">{item.desc}</p>
        <button className="btn reserve__btn mt-4">
              <Link to="/cars">Request</Link>
            </button>
      </div>
     
    </Col>
    
  );
  
  if (isSmallScreen) {
    const settings = {
      scroll3d: true,
      speed: 1000,
      autoplaySpeed: 2000,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      swipeToSlide: true,
      nextArrow: <div style={{ display: "none" }} />,
    };


  return (
    
    <Slider {...settings} className='myswiper'>
      {servicesData.map((item) => ( 
        <ServiceItem item={item} key={item.id} />
      ))} 
   </Slider>
  );
} else {
  return(
    <>
    {servicesData.map((item) => (
      <ServiceItem item={item} key={item.id} />
    ))}
  </>
  );
  
    };
    
};






export default ServicesList;

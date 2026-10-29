/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Hero carousel featuring high-definition luxury skincare visuals and seasonal collections.
 */

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 4500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <img
              src={car1}
              alt="Aura Botanics Pure Organic Skincare"
              className="car-pic"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1920&q=85"
              alt="Hydrating Botanical Elixir Collection"
              className="car-pic"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=85"
              alt="Cold-Pressed Organic Serums by Ahsan Sheikh"
              className="car-pic"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=85"
              alt="Deep Scalp & Hair Wellness Ritual"
              className="car-pic"
            />
          </div>

          <div>
            <img
              src={car2}
              alt="Pure Plant Extracts"
              className="car-pic"
            />
          </div>

          <div>
            <img
              src={car3}
              alt="Conscious Beauty"
              className="car-pic"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselProviderbase from "./CarouselProviderBase";

const FindGroup = () => {
  return (
    <div className="carouselprovidertop">
      <div className="carouselprovider">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={25}
          totalSlides={3}
          isPlaying="false"
          interval={2000}
        >
          <Slider>
            <Slide index={0}>
              <CarouselProviderbase />
            </Slide>
            <Slide index={1}>
              <CarouselProviderbase />
            </Slide>
            <Slide index={2}>
              <CarouselProviderbase />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default FindGroup;

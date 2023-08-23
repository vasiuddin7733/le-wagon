import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselProviderbase from "./carouselproviderbase";

const homeComponent7 = () => {
  return (
    <div className="carouselprovidertop">
      <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
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
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default homeComponent7;

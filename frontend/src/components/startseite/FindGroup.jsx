import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import FindGroupComp from "./FindGroupComp";

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
              <FindGroupComp />
            </Slide>
            <Slide index={1}>
              <FindGroupComp />
            </Slide>
            <Slide index={2}>
              <FindGroupComp />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default FindGroup;

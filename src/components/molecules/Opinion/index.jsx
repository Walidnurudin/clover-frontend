import React from "react";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Opinion1, Opinion2, Opinion3 } from "../../../assets/images";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Opinion() {
  return (
    <>
      <div className="opinion__section">
        <div className="container">
          <h1 className="opinion__section--title open-sans-600 text-center">
            Their opinion about peworld
          </h1>
          <Carousel responsive={responsive}>
            <div className="opinion__section--div">
              <div className="text-center">
                <img src={Opinion1} alt="img" width="120px" />
                <h5 className="open-sans-600">Harry Styles</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className="opinion__section--div--desc open-sans-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                  rhoncus auctor.
                </p>
              </div>
            </div>
            <div className="opinion__section--div">
              <div className="text-center">
                <img src={Opinion2} alt="img" width="120px" />
                <h5 className="open-sans-600">Niall Horan</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className="opinion__section--div--desc open-sans-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                  rhoncus auctor.
                </p>
              </div>
            </div>
            <div className="opinion__section--div">
              <div className="text-center">
                <img src={Opinion3} alt="img" width="120px" />
                <h5 className="open-sans-600">Louis Tomlinson</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className="opinion__section--div--desc open-sans-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                  rhoncus auctor.
                </p>
              </div>
            </div>
            <div className="opinion__section--div">
              <div className="text-center">
                <img src={Opinion1} alt="img" width="120px" />
                <h5 className="open-sans-600">Harry Styles</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className="opinion__section--div--desc open-sans-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                  rhoncus auctor.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Opinion;

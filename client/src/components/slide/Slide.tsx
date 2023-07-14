import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScrool }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScrool={arrowsScrool}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

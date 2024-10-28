import { Image } from 'antd';
import Slider from 'react-slick';

const SliderComponent = ({ arrImage }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <Slider {...settings}>
      {arrImage.map((image) => {
        return <Image src={image} alt="slider" preview={false} width="100%" height="500px" />;
      })}
    </Slider>
  );
};

export default SliderComponent;

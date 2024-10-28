import React from 'react';
import slider1 from '../../asset/images/slider1.png';
import slider2 from '../../asset/images/slider2.png';
import slider3 from '../../asset/images/slider3.png';
import CardComponent from '../../components/CardComponent/CardComponent';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';
const HomePage = () => {
  const arr = ['TV', 'Tủ lạnh', 'Laptop'];
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
        <SliderComponent arrImage={[slider1, slider2, slider3]} />
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <CardComponent />
        </div>
      </div>
    </>
  );
};

export default HomePage;

import { StarFilled } from '@ant-design/icons';
import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
const CardComponent = () => {
  return (
    <WrapperCardStyle
      headStyle={{ width: '200px', height: '200px' }}
      hoverable
      style={{ width: 200 }}
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span> 4.96 </span>
          <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
        </span>
        <span> | Da ban 100+</span>
        <WrapperPriceText>
          1.000.000d <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperReportText>
    </WrapperCardStyle>
  );
};

export default CardComponent;

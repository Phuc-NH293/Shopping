import { Checkbox, Rate } from 'antd';
import React from 'react';
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style';

const NavBarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, option) => {
    switch (type) {
      case 'text':
        return option.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
            {option.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case 'star':
        return option.map((option) => {
          return (
            <div style={{ display: 'flex', gap: '4px' }}>
              <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
              <span>{`tu ${option} sao`}</span>
            </div>
          );
        });
      case 'price':
        return option.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default: {
      }
    }
  };
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>{renderContent('text', ['Tủ Lạnh', 'TV', 'May Giat'])}</WrapperContent>
      <WrapperContent>
        {renderContent('checkbox', [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' }
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent('star', [3, 4, 5])}</WrapperContent>
      <WrapperContent>{renderContent('price', ['Duoi 40.000', 'Tren 50.000'])}</WrapperContent>
    </div>
  );
};

export default NavBarComponent;

import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponet from '../InputComponet/InputComponet';
const ButtoninputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    borderd = '#fff',
    backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13,92,182)',
    colorButton = '#fff'
  } = props;
  return (
    <div style={{ display: 'flex', backgroundColor: '#fff' }}>
      <InputComponet
        size={size}
        placeholder={placeholder}
        borderd={borderd}
        style={{ backgroundColor: backgroundColorInput, border: 'none' }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        styleButton={{ backgroundColor: backgroundColorButton, border: !borderd && 'none' }}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      ></ButtonComponent>
    </div>
  );
};

export default ButtoninputSearch;

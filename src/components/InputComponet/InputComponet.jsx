import { Input } from 'antd';
import React from 'react';

const InputComponet = ({ size, placeholder, borderd, style, ...rests }) => {
  return <Input size={size} placeholder={placeholder} borderd={borderd} style={{ style }} {...rests} />;
};

export default InputComponet;

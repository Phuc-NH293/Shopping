import { DownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Col } from 'antd';
import React from 'react';
import ButtoninputSearch from '../ButtoninputSearch/ButtoninputSearch';
import { WrapperHeader, WrapperHeaderAccount, WrapperText, WrapperTextHeaderSmall } from './style';
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperText>PhucNH</WrapperText>
        </Col>
        <Col span={12}>
          <ButtoninputSearch
            textButton="Tìm kiếm"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            bordered={false}
            // suffix={suffix}
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập / Đăng Kí</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <DownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;

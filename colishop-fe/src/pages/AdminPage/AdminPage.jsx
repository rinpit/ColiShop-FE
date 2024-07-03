import { Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../utils';
import { AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import AdminUser from "../../components/AdminUser/AdminUser"
import AdminProduct from "../../components/AdminProduct/AdminProduct"


const AdminPage = () => {

  const items = [
    getItem('Người Dùng', 'user', <UserOutlined />),
    getItem('Sản Phẩm', 'product', <AppstoreOutlined />),
    getItem('Khác', 'diff', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];


  const [keySelected, setKeySelected] = useState('')
  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return (
          <AdminUser />
        )
      case 'product':
        return (
          <AdminProduct />
        )
      default:
        return (
          <></>
        )
    }
  }


  const handleOnClick = ({ key }) => {
    setKeySelected(key)
  }
  // console.log("keySelected", keySelected)


  return (
    <>
      <div style={{ display: 'flex' }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: '1px, 1px, 2px, #ccc',
            // height: '100vh',
          }}
          items={items}
          onClick={handleOnClick}
        />
        <div style={{ flex: 1 , padding: '20px'}}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  )
}

export default AdminPage
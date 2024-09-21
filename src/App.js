import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import ContactUs from './Components/ContactUs'
import banner from '../src/Assets/banner.jpg'
import logo from '../src/Assets/logo.png'
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('About US', '2', <DesktopOutlined />),
  getItem('Services', 'sub1', <UserOutlined />, [
    getItem('Groceries Delivery', '3'),
    getItem('Food Delivery', '4'),
    getItem('Ride Partner', '5'),
  ]),
  getItem('Contact Us', '9', <PhoneOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuitem, setMenuitem] = useState(1);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{position:'sticky',left:0,top:0}}>
        <div className="demo-logo-vertical" />
        {collapsed?
        <div style={{display:'flex',justifyContent:'center',margin:15}}>
<Avatar src={logo} size={50} style={{backgroundColor:colorBgContainer}}></Avatar>
        </div>
        
      :
      <div style={{display:'flex',justifyContent:'center',marginTop:20,marginBottom:10}}>
        <Avatar src={logo} size={50} style={{backgroundColor:colorBgContainer}}></Avatar>
        <Typography style={{color:"white",fontSize:30,marginLeft:10,fontFamily:'monospace'}}>HITLER</Typography>
      </div>
      }
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} style={{position:'sticky',left:0,top:0}} onClick={(e) => setMenuitem(e.key)}/>
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: '0 16px',
          }}
        >
         
          <div
            style={{
              minHeight: '90%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginTop:30,
             
            }}
          >
            {menuitem==1?<Home/>:menuitem==2?<AboutUs/>:menuitem==9?<ContactUs/>:<Services/>}
          
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;
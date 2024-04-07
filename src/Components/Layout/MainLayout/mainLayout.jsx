import React, {  } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import MainHeader from "../../../Components/Pages/Landing/Header"

function MainLayout() {
  return (
    <Layout>
    <MainHeader/>
      <Outlet />
    </Layout>
  );
}

export default MainLayout;

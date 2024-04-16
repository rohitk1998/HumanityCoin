import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from './Header';

function AppLayout() {
  return (
    <Layout>
      <AppHeader />
      <Outlet />
    </Layout>
  );
}

export default AppLayout;

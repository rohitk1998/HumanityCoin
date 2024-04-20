import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { rootName, appRootName, logoIcon } from './utils/constant';
import MainRoute from './routes/mainRoute';
import AppRoute from './routes/AppRoute';
import { appRoute, mainRoute } from './routes/routingData';
import { AppLayout, Landing } from './routes/lazyRoute';
import MainLayout from './Components/Layout/MainLayout/mainLayout';
import { useConnectMetamask } from "./customHooks/useConnectMetamask";
import "./index.scss"
import loader from "./Components/Assets/Images/logo.png"

function App() {

  return (
    <>
      <Suspense fallback={
        <div style={{
          width:"100%",
          minHeight:"100vh",
          height:"100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <img src={loader} width={150} height={150}/>
        </div>
      }>
        <Routes>
          <Route element={<MainRoute />}>
            <Route path={`${rootName}`} element={<MainLayout />}>
              {mainRoute?.map((item, idx) => {
                return (
                  <Route
                    key={idx}
                    index
                    path={`${rootName}${item.path}`}
                    element={item.component}
                  />
                );
              })}
            </Route>
            <Route path={`${rootName}`} index element={<Landing />} />
          </Route>

          <Route element={<AppRoute />}>
            <Route path={`${appRootName}`} element={<AppLayout />}>
              {appRoute?.map((item, idx) => {
                return (
                  <Route
                    index
                    key={idx}
                    path={`${appRootName}/${item.path}`}
                    element={item.component}
                  />
                );
              })}
              <Route path="/app" element={<Navigate to={`${rootName}`} />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;

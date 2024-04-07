import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { rootName, appRootName } from './utils/constant';
import MainRoute from './routes/mainRoute';
import AppRoute from './routes/AppRoute';
import { appRoute, mainRoute } from './routes/routingData';
import { AppLayout, Landing } from './routes/lazyRoute';
import MainLayout from './Components/Layout/MainLayout/mainLayout';

function App() {
  return (
    <>
      <Suspense>
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

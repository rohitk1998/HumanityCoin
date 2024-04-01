import { lazy } from 'react';

export const AppLayout = lazy(() =>
  import('../Components/Layout/AppLayout/appLayout.jsx')
);
export const PageNotFound = lazy(() =>
  import('../Components/Pages/PageNotFound/PageNotFound')
);
export const Swap = lazy(() => import('../Components/Pages/Swap/Swap'));

export const Landing = lazy(() =>
  import('../Components/Pages/Landing/index.jsx')
);

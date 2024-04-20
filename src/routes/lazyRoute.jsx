import { lazy } from 'react';




// APP ROUTES

export const AppLayout = lazy(() =>
  import('../Components/Layout/AppLayout/appLayout.jsx')
);
export const PageNotFound = lazy(() =>
  import('../Components/Pages/PageNotFound/PageNotFound')
);
export const Swap = lazy(() => import('../Components/Pages/Swap/Swap'));

export const Configure = lazy(() =>
  import('../Components/Pages/Configure/configure.jsx')
);
export const Pool = lazy(() =>
  import('../Components/Pages/Pool/pool.jsx')
);
export const V2Pool = lazy(() =>
  import('../Components/Pages/Pool/liquidityProvider.jsx')
);
export const AddLiquidity = lazy(() =>
  import('../Components/Pages/AddLiquidity/addLiquidity.jsx')
);

export const Migrate = lazy(()=> import('../Components/Pages/Migrate/migrate.jsx'))



// MAIN ROUTES

export const Landing = lazy(() =>
  import('../Components/Pages/Landing/index.jsx')
);

export const Community = lazy(() =>
  import('../Components/Pages/Community/community.jsx')
);
export const FAQ = lazy(()=> import('../Components/Pages/Faq/Faq.jsx'))

export const Ecosystem = lazy(()=> import('../Components/Pages/ecosystem/ecosystem.jsx'))

export const Explorer = lazy(()=> import('../Components/Pages/Explorer/Explorer.jsx'))


import { Swap, Landing, Configure, Pool , V2Pool, AddLiquidity, Community, FAQ , Migrate, Explorer} from './lazyRoute';
import { primaryRoutes } from '../staticObjects/routing';
import Ecosystem from '../Components/Pages/ecosystem/ecosystem';

const { authLanding, swap , configure, pool , v2pool,addLiquidity , community , faq , ecosystem, explorer,migrate } = primaryRoutes;

export const appRoute = [
  {
    path: swap,
    component: <Swap />,
  },
  {
    path: configure,
    component: <Configure />,
  },
  {
    path: pool,
    component: <Pool />,
  },
  {
    path: v2pool,
    component: <V2Pool />,
  },
  {
    path: addLiquidity,
    component: <AddLiquidity />,
  },
  {
    path: migrate,
    component: <Migrate />,
  },
  {
    path: explorer,
    component: <Explorer />,
  },
];

export const mainRoute = [
  {
    path: authLanding,
    component: <Landing />,
  },
  {
    path : community,
    component : <Community/>
  },
  {
    path : faq , 
    component : <FAQ/>
  },
  {
    path :  ecosystem, 
    component : <Ecosystem/>
  }
];

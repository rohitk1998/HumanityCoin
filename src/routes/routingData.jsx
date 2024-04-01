import {
  Swap,
  Landing} from "./lazyRoute";
import {
  primaryRoutes,
} from "../staticObjects/routing";


export const publicRoutesData = [
  {
    path: primaryRoutes.landing,
    component: <Landing />,
  }
];

const {
  authLanding,
  swap
} = primaryRoutes;


export const appRoute = [
  {
    path: swap,
    component: <Swap />,
  },

]

export const mainRoute = [
  {
    path: authLanding,
    component: <Landing />,
  }
];

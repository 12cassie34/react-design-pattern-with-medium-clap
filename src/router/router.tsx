import { RouteObject } from 'react-router-dom';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import PhishingIcon from '@mui/icons-material/Phishing';

const CustomHooks = dynamic(() => import('../pages/CustomHooks'), {
  suspense: true,
});

const NotFound = dynamic(() => import('../pages/NotFound'), {
  suspense: true,
});

const routes: RouteObject[] = [
  {
    path: '/',
    element: <CustomHooks />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const useDrawerList = () => useMemo(
  () => [
    {
      path: '/',
      title: 'Custom Hooks',
      icon: <PhishingIcon />,
    },
  ],
  [],
);

export default routes;

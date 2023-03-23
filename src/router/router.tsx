import { ReactNode, useMemo } from 'react';
import { RouteObject } from 'react-router-dom';
import dynamic from 'next/dynamic';

import PhishingIcon from '@mui/icons-material/Phishing';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Home = dynamic(() => import('../pages/Home'), {
    suspense: true,
});
const CustomHooks = dynamic(() => import('../pages/CustomHooks'), {
    suspense: true,
});
const NotFound = dynamic(() => import('../pages/NotFound'), {
    suspense: true,
});

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/custom-hooks',
        element: <CustomHooks />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

interface DrawerList {
    path: string;
    title: string;
    icon: ReactNode;
}

export const useDrawerList = () => useMemo<DrawerList[]>(
    () => [
        {
            path: '/',
            title: 'Why this project?',
            icon: <TipsAndUpdatesIcon />,
        },
        {
            path: '/custom-hooks',
            title: 'Custom Hooks',
            icon: <PhishingIcon />,
        },
    ],
    [],
);

export default routes;

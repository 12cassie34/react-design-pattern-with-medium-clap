import { ReactNode, useMemo } from 'react';
import { RouteObject } from 'react-router-dom';
import dynamic from 'next/dynamic';

import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import PhishingIcon from '@mui/icons-material/Phishing';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Home = dynamic(() => import('../pages/Home'), {
    suspense: true,
});
const CustomHooks = dynamic(() => import('../pages/CustomHooks'), {
    suspense: true,
});
const CompoundComponent = dynamic(() => import('../pages/CompoundComponent'), {
    suspense: true
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
        path: '/compound-components',
        element: <CompoundComponent />,
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
        {
            path: '/compound-components',
            title: 'Compound Components',
            icon: <EmojiNatureIcon />
        }
    ],
    [],
);

export default routes;

import { ReactNode, useMemo } from 'react';
import { RouteObject } from 'react-router-dom';
import dynamic from 'next/dynamic';

import CategoryIcon from '@mui/icons-material/Category';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import PhishingIcon from '@mui/icons-material/Phishing';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WebhookIcon from '@mui/icons-material/Webhook';

const Home = dynamic(() => import('../pages/Home'), {
    suspense: true,
});
const SingleCustomHook = dynamic(() => import('../pages/SingleCustomHook'), {
    suspense: true,
});
const CompoundComponent = dynamic(() => import('../pages/CompoundComponent'), {
    suspense: true
});
const ControlledProps = dynamic(() => import('../pages/ControlledProps'), {
    suspense: true
});
const MultipleCustomHooks = dynamic(() => import('../pages/MultipleCustomHooks'), {
    suspense: true
});
const PropsCollection = dynamic(() => import('../pages/PropsCollection'), {
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
        path: '/single-custom-hook',
        element: <SingleCustomHook />,
    },
    {
        path: '/compound-components',
        element: <CompoundComponent />,
    },
    {
        path: '/controlled-props',
        element: <ControlledProps />
    },
    {
        path: '/multiple-custom-hooks',
        element: <MultipleCustomHooks />
    },
    {
        path: '/props-collection',
        element: <PropsCollection />
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
            path: '/single-custom-hook',
            title: 'Single Custom Hook',
            icon: <PhishingIcon />,
        },
        {
            path: '/compound-components',
            title: 'Compound Components',
            icon: <EmojiNatureIcon />
        },
        {
            path: '/controlled-props',
            title: 'Controlled Props',
            icon: <RepeatOneOnIcon />
        },
        {
            path: '/multiple-custom-hooks',
            title: 'Multiple Custom Hooks',
            icon: <WebhookIcon />
        },
        {
            path: '/props-collection',
            title: 'Props Collection',
            icon: <CategoryIcon />
        }
    ],
    [],
);

export default routes;

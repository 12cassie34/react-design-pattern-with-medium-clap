import { ReactNode, useMemo } from 'react';
import { RouteObject } from 'react-router-dom';
import dynamic from 'next/dynamic';

import CakeIcon from '@mui/icons-material/Cake';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PhishingIcon from '@mui/icons-material/Phishing';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
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
const PropsGetter = dynamic(() => import('../pages/PropsGetter'), {
    suspense: true
});
const StateInitialiser = dynamic(() => import('../pages/StateInitialiser'), {
    suspense: true
});
const StateReducer = dynamic(() => import('../pages/StateReducer'), {
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
        path: '/props-getter',
        element: <PropsGetter />
    },
    {
        path: '/state-initialiser',
        element: <StateInitialiser />
    },
    {
        path: '/state-reducer',
        element: <StateReducer />
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
        },
        {
            path: '/props-getter',
            title: 'Props Getter',
            icon: <KeyboardReturnIcon />
        },
        {
            path: '/state-initialiser',
            title: 'State Initialiser',
            icon: <CakeIcon />
        },
        {
            path: '/state-reducer',
            title: 'State Reducer',
            icon: <ReduceCapacityIcon />
        }
    ],
    [],
);

export default routes;

import { FunctionComponent, useContext } from "react";

import { animated, useSpring } from "@react-spring/web";

import { MediumClapContext, MediumClapContextValue } from './ContextProvider';

import Streamers from '../Streamers';

const ClapAnimation: FunctionComponent = () => {
    const { isHover, streamersAnimation } = useContext<MediumClapContextValue>(MediumClapContext);

    const boxShadowAnimation = useSpring({
        from: { opacity: isHover ? 0 : 1, transition: 'ease' },
        to: [{ opacity: isHover ? 1 : 0 }],
        loop: isHover,
        config: { duration: 1_000 },
    });

    return (
        <>
            <animated.div
                            style={{
                                borderRadius: '50%',
                                width: '60px',
                                height: ' 60px',
                                position: 'absolute',
                                boxShadow: '0px 0px 28px #90caf9',
                                ...boxShadowAnimation,
                            }}
                        />
            <animated.div
                            style={{
                                opacity: 0,
                                ...streamersAnimation
                            }}
                        >
                <Streamers />
            </animated.div>
        </>
        )
}

export default ClapAnimation;
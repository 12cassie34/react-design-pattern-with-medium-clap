import { useSpring } from '@react-spring/web';
import { useState } from 'react';

const useClapAnimation = () => {
    const [isHover, setIsHover] = useState(false);

    const boxShadowAnimation = useSpring({
        from: { opacity: isHover ? 0 : 1, transition: 'ease' },
        to: [{ opacity: isHover ? 1 : 0 }],
        loop: isHover,
        config: { duration: 1_000 },
    });
    const [clapAddedAnimation, clapAddedApi] = useSpring(() => ({
    }));
    const [streamersAnimation, streamersApi] = useSpring(() => ({}));

    return { boxShadowAnimation, clapAddedAnimation, clapAddedApi, streamersAnimation, streamersApi, setIsHover }
}

export default useClapAnimation;
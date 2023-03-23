import { useSpring } from "@react-spring/web";
import { useState } from "react";

const useMediumClap = () => {
    const [isHover, setIsHover] = useState(false);
    const [addedClap, setAddedClap] = useState(0);
    const [totalClap, setTotalClap] = useState(200);

    const boxShadowAnimation = useSpring({
        from: { opacity: isHover ? 0 : 1, transition: 'ease' },
        to: [{ opacity: isHover ? 1 : 0 }],
        loop: isHover,
        config: { duration: 1_000 },
    });
    const [clapAddedAnimation, clapAddedApi] = useSpring(() => ({
    }));
    const [streamersAnimation, streamersApi] = useSpring(() => ({}));

    const handleAddedClap = () => {
        if (addedClap < 50) {
            clapAddedApi.start({
                from: { opacity: 2, transform: 'translate(0px, 10px)', transition: 'ease-in-out', transitionDelay: '2500' },
                to: { opacity: 0, transform: 'translate(0px, -100px)' },
                config: { duration: 700 },
            });
            streamersApi.start({
                from: { opacity: 10, transform: 'scale(0)' },
                to: { opacity: 0, transform: 'scale(1)' }
            });
            setAddedClap(addedClap + 1);
            setTotalClap(totalClap + 1);
        }
    };

    return { isHover, setIsHover, addedClap, totalClap, boxShadowAnimation, clapAddedAnimation, streamersAnimation, handleAddedClap }
}

export default useMediumClap;
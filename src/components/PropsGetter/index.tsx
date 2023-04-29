import { FunctionComponent, PropsWithChildren } from 'react';
import { animated } from '@react-spring/web';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useClapAnimation from './useClapAnimation';
import useClapsCount from './useClapsCount';

import DisplayLayout from '../DisplayLayout';
import Streamers from '../Streamers';

interface ClapContainerProps {
    handleClick: () => void;
}

const ClapContainer: FunctionComponent<PropsWithChildren<ClapContainerProps>> = ({ children, handleClick, ...props }) => (
    <IconButton
                        onClick={handleClick}
                        aria-label="thumb up"
                        color="primary"
                        sx={{ border: '1px solid', width: '60px', height: '60px', backgroundColor: '#ffffff' }}
                        {...props}>
        {children}
    </IconButton>
    )

const PropsGetter: FunctionComponent = () => {
    const { clapAddedAnimation, boxShadowAnimation, streamersAnimation, setIsHover, clapAddedApi, streamersApi } = useClapAnimation();
    const { addedClap, totalClap, setAddedClap, setTotalClap } = useClapsCount();

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

    const getClapContainerProps = () => 
        // Here, your can do some complicated operation before passing 
        // props in <ClapContainer />
         ({
            'aria-valuenow': totalClap,
        'aria-valuemax': 50
        })
    

    return (
        <DisplayLayout chipLabel='Props Collection 🔡'>
            <animated.div
                    style={{
                        position: 'relative',
                        opacity: 0,
                        ...clapAddedAnimation
                    }}
                >
                <IconButton sx={{
                        padding: '20px',
                        backgroundColor: '#90caf9',
                        width: '20px',
                        height: '20px',
                    }}>
                    <Typography variant="body2">{`+${addedClap}`}</Typography>
                </IconButton>
            </animated.div>
            <Typography variant="body2" color="primary" sx={{ position: 'absolute', top: '6px' }}>{totalClap}</Typography>
            <Stack 
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    sx={{
                        position: 'absolute'
                    }}
                >
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
                <ClapContainer handleClick={handleAddedClap} {...getClapContainerProps()} >
                    <Typography variant='body1'>Thumb UP</Typography>
                </ClapContainer>
            </Stack>
        </DisplayLayout>);
}

export default PropsGetter;
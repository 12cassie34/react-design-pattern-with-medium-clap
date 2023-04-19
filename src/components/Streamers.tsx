import { FunctionComponent } from 'react';

const circleStyles = {
    borderRadius: '50%',
    backgroundColor: 'gray',
    width: '5px',
    height: '5px',
}

const triangleStyles = {
    width: 0,
    height: 0,
    borderStyle: 'solid',
}

const Streamers: FunctionComponent = () => (
    <div style={{ position: 'absolute' }}>
        <div 
            style={{
                position: 'absolute',
                left: '60px',
                ...circleStyles
            }}
        />
        <div 
            style={{
                borderWidth: '7px 0 0 7px',
                borderColor: 'transparent transparent transparent #ff0033',
                position: 'absolute',
                top: '-15px',
                left: '75px',
                ...triangleStyles
            }} 
        />
        <div 
            style={{
                position: 'absolute',
                top: '35px',
                left: '70px',
                ...circleStyles
            }}
        />
        <div 
            style={{
                borderWidth: '7px 7px 0 0',
                borderColor: '#ff0033 transparent transparent transparent',
                position: 'absolute',
                top: '45px',
                left: '85px',
                ...triangleStyles
            }} 
        />
        <div 
            style={{
                position: 'absolute',
                top: '70px',
                left: '30px',
                ...circleStyles
            }}
        />
        <div 
            style={{
                borderWidth: '0 3.5px 7px 3.5px',
                borderColor: 'transparent transparent #ff0033 transparent',
                position: 'absolute',
                top: '85px',
                left: '30px',
                ...triangleStyles
            }} 
        />
        <div 
            style={{
                position: 'absolute',
                top: '45px',
                left: '-10px',
                ...circleStyles
            }}
        />
        <div 
            style={{
                borderWidth: '0 7px 7px 0',
                borderColor: 'transparent #ff0033 transparent transparent',
                position: 'absolute',
                top: '55px',
                left: '-25px',
                ...triangleStyles
            }} 
        />
        <div 
            style={{
                position: 'absolute',
                top: '0px',
                left: '-5px',
                ...circleStyles
            }}
        />
        <div 
            style={{
                borderWidth: '0 0 7px 7px',
                borderColor: 'transparent transparent #ff0033 transparent',
                position: 'absolute',
                top: '-11px',
                left: '-20px',
                ...triangleStyles
            }} 
        />
    </div>
    )

export default Streamers;    
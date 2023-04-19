import { FunctionComponent } from 'react';

import Typography from '@mui/material/Typography';

const CustomHooksContent: FunctionComponent = () => (
    <>
        <Typography variant='h4'>Custom Hooks</Typography>
        <Typography variant='body1'>
            Custom Hooks let you share logic between components.
        </Typography>
        <Typography variant='body1'>
            Strictly speaking, it&apos;s not a design pattern, but it comes in handy when you want to reuse your logic.
        </Typography>
        <Typography variant='body1'>
            The benefit of using the custom hook in this case is using the exactly same animation logic with total different UIs.
        </Typography>
    </>
    
)

export default CustomHooksContent;


import {Box,makeStyles, Typography} from '@material-ui/core';

import { height, width } from '@mui/system';


const usestyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        '& :first-child': {
            fontSize: 66,
            color: '#ffffff',
            lineHeight: 1
        },
        '& :last-child' : {
             fontSizr: 20,
             background: '#ffffff'
        }


    }
})

const Banner = () => {
    const classes = usestyles();
    
    return (
        <Box className = {classes.image}>
           <Typography>BLOG</Typography>
           <Typography>The React Project</Typography>
        </Box>
    )
}

export default Banner;
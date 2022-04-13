
import {Box, makeStyles, Typography} from '@material-ui/core';
import {Edit,Delete } from '@material-ui/icons';

const usestyle = makeStyles({
        container: {
             padding: '0 100px'
        },
        image: {
            width: '100%',
            height: '50vh',
            objectFit: 'cover'
        },
        icons: {
            float: 'right'
        },
        icon: {
            margin: 5,
            border: '1px solid #878787',
            padding: 5,
            borderRadius: 10
        },
        heading: {
            fontSize: 38,
            fontWeight: 600,
            textAlign: 'center',
            margin: '50px 0 10px 0'
        },
        subheading: {
            color: '#878787',
            display: 'flex',
            margin: '20px 0'
        }
    })

const DetailView = () => {
    const classes = usestyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
       <Box className={classes.container}>
           <img src= {url} alt="banner" className={classes.image}></img>
        <Box className={classes.icons}>
            <Edit className={classes.icon} color="primary" />
            <Delete className={classes.icon} color="error" />
        </Box>
        <Typography className={classes.heading}>This is Details blog view page</Typography>

        <Box className={classes.subheading}>
            <Typography>Author: <span style={{fontWeight:600}}>Username</span></Typography>
            <Typography style={{marginLeft: 'auto'}}>7th March 2022</Typography>
        </Box>

        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorem. Autem, sint magnam! </Typography>
       </Box>
    )
}

export default DetailView; 

import {Box, makeStyles, Typography} from '@material-ui/core';

const usestyle = makeStyles({
    container: {
         padding: '0 100px'
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    createblog: {
        margin: '50px 0 10px 0'
    },
    title: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    }
})


const CreateView = () => {
    const classes = usestyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
        <Box className={classes.container}>
        <img src= {url} alt="banner" className={classes.image}></img>
        <Box className={classes.createblog}>
            <Typography className={classes.title}>Page to create a Blog</Typography>
        </Box>
        </Box>
    )
}

export default CreateView;
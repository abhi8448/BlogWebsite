

//function components using react hooks
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import './header.css';
import {Link} from 'react-router-dom';
const usestyle = makeStyles({
   component: {
       background: '#ffffff',
       color: 'black'
   },
   link: {
       textDecoration: 'none',
       color: 'inherit'
   }
})

const Header = () => {
    const classes = usestyle();
    return (

       <AppBar className="classes.component">
           <Toolbar className="container">
            <Link to= '/' className={classes.link}><Typography className='bar-container'>HOME</Typography></Link>   
            <Link to= '/about' className={classes.link}> <Typography className='bar-container'>ABOUT</Typography></Link> 
            <Link to= '/contact' className={classes.link}><Typography className='bar-container'>CONTACT</Typography></Link> 
            <Link to= '/login' className={classes.link}><Typography className='bar-container'>LOGIN</Typography></Link>  
           </Toolbar>
       </AppBar>
    )
}

export default Header;
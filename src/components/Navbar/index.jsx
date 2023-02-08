import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import {

    Link,useNavigate
} from "react-router-dom";
import { Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from '../Drawer/DrawerComp';



export default function ButtonAppBar() {

    const [value, setValue] = React.useState()

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate()




    return (
        <>
            <AppBar elevation={0} position='static' sx={{backgroundColor:{md:"#171c28",xs:'#171c28'}}} >
                <Toolbar className='nav' >
                     <Typography variant='h3' sx={{color:{md:"#fff",xs:"#fff"},fontSize:{md:"30px",xs:"16px",sm:"24px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"},marginLeft:{md:"80px",xs:"10px"},cursor:{md:"pointer",xs:"pointer"},mt:{md:"20px",xs:"0px"}}} onClick={() => navigate("/")}>Portfolio.Noman</Typography>
                    {/* <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/logo_new_6616946a-089b-4ed7-9d17-17ffeb96abda_small.png?v=1671016750" sx={{width:{md:"120px",xs:"80px"}}} alt="Logo" width={{md:"65px",xs:"40px"}} marginLeft={{md:"80px"}}  onClick={() => navigate("/")} /> */}
                    {
                        isMatch ? (
                            <>
                             
                            <DrawerComp />
                            </>

                        ) : (
                            <>
                                <Tabs textColor="inherit"  value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                                   
                               

                                    <Tab label="Skills " sx={{color:"#fff",fontSize:{md:"16px"},mt:{md:"20px",xs:"0px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}} component={Link} to="/" />
                                    <Tab label="Services " sx={{color:"#fff",fontSize:{md:"16px"},mt:{md:"20px",xs:"0px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}} component={Link} to="/" />

                                    <Tab label="About" sx={{color:"#fff",fontSize:{md:"16px"},mt:{md:"20px",xs:"0px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}}   to="/about" />
                                    <Tab label="Portfolio " sx={{color:"#fff",mt:{md:"20px",xs:"0px"},fontSize:{md:"16px",sm:"10px",lg:"16px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}}  to="/portfolio" />

                                    <Tab label="Experience " sx={{color:"#fff",mt:{md:"20px",xs:"0px"},fontSize:{md:"16px",sm:"10px",lg:"16px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}}  to="/experience" />
                                    <Tab label="Contact Us "  sx={{color:"#fff",mt:{md:"20px",xs:"0px"},fontSize:{md:"16px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"}}} to="/contact" />
                                    {/* <Tab label="Product " sx={{color:"black",fontSize:"20px"}} component={Link} to="/product" /> */}
                                    {/* <Tab label="Cart " sx={{color:"black",fontSize:"20px"}} component={Link} to="/cartsection" /> */}

                                </Tabs>

                                {/* <Button   sx={{marginLeft:"auto"}} component={Link} to="/login" variant="contained"><LoginIcon/></Button> */}
   
                                {/* <Typography component={Link} to='/login' sx={{color:"black",ml:"auto" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><LoginIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography component={Link} to='/signup'  sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><VpnKeyIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography  component={Link} to='/carts' marginRight={{md:"30px"}} sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><ShoppingCartIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography> */}

                               
                               
                            </>
                        )
                    }


                </Toolbar>

            </AppBar>
          {/* {showCart && <Cart setShowCart={setShowCart}/>} */}
         </>
    );
}
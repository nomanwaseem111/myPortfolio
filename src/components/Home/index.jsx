import React from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"

import Grid from "@mui/material/Grid"
import Lottie from 'react-lottie'
import animation from '../banner.json'
import {

  useNavigate
} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { textAlign } from "@mui/system"



const Banner = () => {
 
  const navigate = useNavigate()

  const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData:animation,
    rendererSettings:{
      preserveAspectRatio:'xMidyMid slice'
    }

 };
 
  return (
    <Grid sx={{ height: { md: "auto" }}} overflow={{xs:"hidden"}} maxWidth="xxl" width={{xs:"100%"}}  id="banner" backgroundColor={{md:"#171c28",xs:"#171c28"}}>
      
        <Stack sx={{ width: { md: "100%", xs: "100%", lg: "100%" }, height: { xs: "660px", md: "780px" }, }}>
        <Fade bottom duration={1500}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            // m={{ md: "30px" }}
            textAlign={{ md: "start", xs: "center" }}
            mt={{ xs: "30px" }}
            // sx={{ border: { xs: "1px solid white",md:"1px solid white" } }}
          >
            <Box
              sx={{
                width: { md: "85%", xs: "100%" },
                height: { md: "400px", xs: "200px" },
                mt: { md: "120px" },
                // border: { xs: "1px solid white",md:"1px solid white" }
                marginLeft:{md:"50px",xs:"10px"}

              }}
            >
            
              <Typography
                variant="h2"
                sx={{
                  fontSize: { lg: "70px", md: "70", xs: "20px" },
                  fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"},
                  color:{md:"#fff",xs:"#fff"},
                  mt:{xs:"50px",md:"0px"},
                  fontWeight:{md:"500",xs:"400"},
                  // border:{xs:"1px solid white"},
                  textAlign:{xs:"center",md:"justify"}
                }}
              >
                Hi all, I'm Noman 👋
              </Typography>
             
             <Stack justifyContent={{xs:"center"}} alignItems={{xs:"center"}}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { lg: "26px", md: "26px", xs: "12px" },
                  mt: "20px",
                  
                  // mt:{xs:"20px",md:"40px"},
                  fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"},
                  color:{md:"#fff",xs:"#fff"},
                  lineHeight:{md:"50px",xs:"30px"},
                  width: {xs: '320px',md:"900px"},
                  // width:{xs:"3px"},
                  // margin:{xs:"auto"},
                  marginRight:{xs:"20px",md:"0px"}
                  
                  
                }}
              >
                A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
              </Typography>
             </Stack>
              <Stack sx={{mt:{xs:"20px",md:"20px"},marginLeft:{md:"0px",xs:"70px"}}}  direction={{md:"row",xs:"row"}} spacing={2}>
              <a href="https://www.facebook.com/noman.waseem.965" target="_blank"   sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://github.com/nomanwaseem111" target="_blank" sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fab fa-github"></i></a>
              <a href="nomanwaseem111@gmail.com" target="_blank" sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fa-solid fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/noman-waseem-6b847b245/" target="_blank" sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fa-brands fa-linkedin-in"></i></a>

              </Stack>
              <Stack direction={{md:"row",xs:"row"}} spacing={4} mt={{md:"42px",xs:"40px"}} marginLeft={{md:"0px",xs:"45px"}}>
              <Button variant="contained" sx={{width:{md:"120px",xs:"100px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"},backgroundColor:{md:"#55198b",xs:"#55198b"},height:{md:"45px",xs:"40px"},fontSize:{md:"14px",xs:"12px"},borderRadius:{md:"6px",xs:"6px"}}}>CONTACT</Button>
              <Button variant="contained"  sx={{width:{md:"160px",xs:"130px"},fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"},backgroundColor:{md:"#55198b",xs:"#55198b"},height:{md:"45px",xs:"40px"},fontSize:{md:"14px",xs:"12px"},borderRadius:{md:"6px",xs:"6px"}}}
               onClick={() =>window.open('https://drive.google.com/file/d/1dL4nEEpkpjCv220gCtAFSeEN4beoFQdK/view?usp=share_link','_blank')} >SEE MY RESUME</Button>

              </Stack>
              
            </Box>
            

            <Box sx={{width:{md:"1600px",xs:"350px"},mt:{xs:"155px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}}} >
            <Lottie options={defaultOptions}   />

            </Box>
           
            {/* <Box
              component="img"
              src={BannerImg}

              sx={{
                width: { md: "530px", xs: "230px" },

                m: { xs: "auto" },
                mt: { xs: "10px",md:"40px"},

              }}
            /> */}
          </Stack>
          </Fade>
        </Stack>
        
      
    </Grid>
  )
}

export default Banner
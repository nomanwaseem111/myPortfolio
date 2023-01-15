import React from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Lottie from 'react-lottie'
import animation from '../banner.json'
import LoginIcon from '@mui/icons-material/Login';
import {

  Link,useNavigate
} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';



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
    <Grid sx={{ height: { md: "auto" }}} id="banner" backgroundColor={{md:"#171c28",xs:"#171c28"}}>
      <Container maxWidth="xxl" width={{xs:"100%"}} >
        <Stack sx={{ width: { md: "100%", xs: "100%", lg: "100%" }, height: { xs: "580px", md: "760px" }, }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            m={{ md: "30px" }}
            textAlign={{ md: "start", xs: "center" }}
            mt={{ xs: "30px" }}
            // sx={{ border: { xs: "1px solid white",md:"1px solid white" } }}
          >
            <Box
              sx={{
                width: { md: "85%", xs: "100%" },
                height: { md: "400px", xs: "200px" },
                mt: { md: "200px" },
                // border: { xs: "1px solid white",md:"1px solid white" }

              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { lg: "50px", md: "50", xs: "14px" },
                  fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"},
                  color:{md:"#fff",xs:"#fff"},
                  mt:{xs:"50px",md:"0px"},
                }}
              >
                Hi all, I'm Noman 👋
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { lg: "26px", md: "26px", xs: "12px" },
                  mt:{xs:"20px",md:"40px"},
                  fontFamily:{md:"Eudoxus Sans",xs:"Eudoxus Sans"},
                  color:{md:"#fff",xs:"#fff"},
                  lineHeight:{md:"50px",xs:"30px"}

                }}
              >
                A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
              </Typography>
              <Stack sx={{mt:{xs:"20px",md:"20px"},marginLeft:{md:"0px",xs:"65px"}}}  direction={{md:"row",xs:"row"}} spacing={2}>
              <a href="https://www.facebook.com/noman.waseem.965" target="_blank"   sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://github.com/nomanwaseem111" target="_blank" sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fab fa-github"></i></a>
              <a href="nomanwaseem111@gmail.com" target="_blank" sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fa-solid fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/noman-waseem-6b847b245/" target="_blank" sx={{color:"white" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><i class="fa-brands fa-linkedin-in"></i></a>

              </Stack>
            </Box>

            <Box sx={{width:{md:"1600px",xs:"350px"},mt:{xs:"75px",md:"0px"}}}>
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
        </Stack>
      </Container>
    </Grid>
  )
}

export default Banner
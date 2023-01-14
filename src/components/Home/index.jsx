import React from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import {useNavigate } from "react-router-dom"
import Lottie from 'react-lottie'
import animation from '../banner.json'

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
    <Grid sx={{ height: { md: "auto" }}} id="banner" backgroundColor={{md:"#171c28"}}>
      <Container maxWidth="xl" width={{xs:"100%"}} >
        <Stack sx={{ width: { md: "100%", xs: "100%", lg: "100%" }, height: { xs: "565px", md: "760px" }, }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            m={{ md: "20px" }}
            textAlign={{ md: "start", xs: "center" }}
            mt={{ xs: "30px" }}
            // sx={{ border: { xs: "1px solid black" } }}

          >
            <Box
              sx={{
                width: { md: "100%", xs: "100%" },
                height: { md: "400px", xs: "200px" },
                mt: { md: "200px" },
                // border: { xs: "1px solid black" }

              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { lg: "50px", md: "50", xs: "14px" },
                  fontFamily:{md:"Roboto",xs:"Roboto"},
                  color:{md:"#fff",xs:"#fff"}
                }}
              >
                Hi all, I'm Noman 👋
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { lg: "30px", md: "30px", xs: "16px" },
                  mt:{xs:"10px",md:"50px"},
                  fontFamily:{md:"Roboto",xs:"Roboto"},
                  color:{md:"#fff",xs:"#fff"}

                }}
              >
                A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
              </Typography>
            
            </Box>

            <Box>
            <Lottie options={defaultOptions} height={800} width={800} />

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
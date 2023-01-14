import React from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import {useNavigate } from "react-router-dom"
import BannerImg from "../../components/banner-img.png"
const Banner = () => {
 
  const navigate = useNavigate()

 
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
                variant="span"
                sx={{
                  fontSize: { lg: "30px", md: "20", xs: "14px" },
                  fontFamily:{md:"Roboto",xs:"Roboto"},
                  color:{md:"#fff",xs:"#fff"}
                }}
              >
                Smart Products
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { lg: "90px", md: "80px", xs: "40px" },
                  fontWeight: { lg: "600", md: "300", xs: "700" },
                  mt:{xs:"10px"},
                  fontFamily:{md:"Roboto",xs:"Roboto"},
                  color:{md:"#fff",xs:"#fff"}

                }}
              >
                Winter Offer <br /> 2024 Collection
              </Typography>
              <Button
                className="shopNow"
                sx={{
                  "&:hover": {
                backgroundColor: "#fff",

                color: "purple",
                border:"none"
              },
                  width: { md: "180px", xs: "100px" },
                  mt: { md: "30px", xs: "10px" },
                  ml: { md: "10px", xs: "5px" },
                  border: { md: "1px solid #fff", xs: "1px solid #fff" },
                  padding: { md: "10px", xs: "10px" },
                  color: { md: "#fff", xs: "#fff" },
                  fontSize: { md: "20px", xs: "12px" },
                  fontFamily:{md:"Roboto",xs:"Roboto"},
                  backgroundColor:{md:"8e2de2"}
                }}
                onClick={() => navigate("/accessories")}

              >
                Shop Now
              </Button>
            </Box>
            <Box
              component="img"
              src={BannerImg}

              sx={{
                width: { md: "530px", xs: "230px" },

                m: { xs: "auto" },
                mt: { xs: "10px",md:"40px"},

              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Banner
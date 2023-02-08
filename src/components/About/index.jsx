import React from 'react'
import Stack from "@mui/material/Stack"
import { Typography,Box } from '@mui/material'
import Fade from 'react-reveal/Fade';

const index = () => {
  return (
   
    <Stack  display={{md:"flex",xs:"flex",sm:"flex"}} justifyContent={{md:"space-around",xs:"space-around",sm:"space-around"}} alignItems={{md:"center",xs:"center",sm:"center"}} flexWrap={{md:'wrap',xs:'wrap',sm:'wrap'}} flexDirection={{md:"row",xs:"column",sm:"column"}} backgroundColor={{md:"#171c28",xs:"#171c28",sm:"#171c28"}} height={{md:"1000px",xs:'750px',sm:'900px'}}>
      
      <Fade left> 
       <Stack width={{md:"800px"}}  height={{md:"400px"}}  >
         <Typography variant='h3' textAlign={{xs:'center',md:"left"}} color={{md:"#fff",xs:"#fff",sm:"#fff"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}} fontSize={{md:"60px",xs:"30px",sm:"40px"}}>Hi all, I'm Noman 👋</Typography>
         <Typography variant='p'  textAlign={{xs:'center',md:"left"}}  color={{md:"#fff",xs:"#fff",sm:"#fff"}}                     fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}}
  lineHeight={{md:"60px",xs:"30px",sm:"40px"}} mt={{md:"20px",xs:"30px",sm:"40px"}}   fontSize={{md:"30px",xs:"14px",sm:"20px"}}>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</Typography>
       <Typography variant='p' color={{md:"#fff",xs:"#fff",sm:"#fff"}} fontSize={{md:"24px",xs:"16px",sm:"20px"}} mt={{md:"20px",xs:"20px",sm:"20px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}} textAlign={{xs:"center",md:'left',sm:'center'}} >Age : 26</Typography>
       <Typography variant='p' color={{md:"#fff",xs:"#fff",sm:"#fff"}} fontSize={{md:"24px",xs:"16px",sm:"20px"}} mt={{md:"20px",xs:"20px",sm:"20px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}} textAlign={{xs:"center",md:'left',sm:'center'}} >Email : nomanwaseem111@gmail.com</Typography>
       <Typography variant='p' color={{md:"#fff",xs:"#fff",sm:"#fff"}} fontSize={{md:"24px",xs:"16px",sm:"20px"}} mt={{md:"20px",xs:"20px",sm:"20px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}} textAlign={{xs:"center",md:'left',sm:'center'}} >Phone:
+923122833671</Typography>
       <Typography variant='p' color={{md:"#fff",xs:"#fff",sm:"#fff"}} fontSize={{md:"24px",xs:"16px",sm:"20px"}} mt={{md:"20px",xs:"20px",sm:"20px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}} textAlign={{xs:"center",md:'left',sm:'center'}}>Address:
Karachi, Pakistan</Typography>
       <Typography variant='p' color={{md:"#fff",xs:"#fff",sm:"#fff"}} fontSize={{md:"24px",xs:"16px",sm:"20px"}} mt={{md:"20px",xs:"20px",sm:"20px"}} fontFamily={{md:"Eudoxus Sans",xs:"Eudoxus Sans",sm:"Eudoxus Sans"}} textAlign={{xs:"center",md:'left',sm:'center'}} >Staus:
Available</Typography>

       </Stack>


       <Stack>
        <Box mb={{md:"0px",xs:'10px',sm:'100px'}} borderRadius={{md:'20px',sm:"20px",xs:"20px"}} width={{md:"400px",xs:"200px",sm:"200px"}} height={{md:'450px',xs:'200px'}} component="img" src="https://media.licdn.com/dms/image/C5603AQGCM_tQcrdd2w/profile-displayphoto-shrink_400_400/0/1657805581835?e=1681344000&v=beta&t=hwOnNiOXK8GqnuvAiIngvAutwTjrBk2kDbIBBNXgD_c"/>
       </Stack>
       </Fade>
    </Stack>
    
  )
}

export default index

import React, { useState } from 'react'
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';



const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>

       
        <ListItemButton>
            <ListItemIcon>
              <ListItemText >
                <Button href="/" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"}}} ><HomeIcon sx={{marginRight:{xs:"10px"}}} / >  Home</Button>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 
          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/about" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"}}}><HeadphonesIcon sx={{marginRight:{xs:"10px"}}}/> About</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/portfolio" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"}}}><PhoneAndroidIcon sx={{marginRight:{xs:"10px"}}}/> Portfolio</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/experience" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"}}} ><PhoneForwardedIcon sx={{marginRight:{xs:"10px"}}}/>Experience</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         


          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/contact" sx={{textTransform:{xs:"capitalize"},color:{xs:"black"}}} ><LoginIcon sx={{marginRight:{xs:"10px"}}}/> Contact</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         

        </List>

      </Drawer>
      <IconButton sx={{ color: "black", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
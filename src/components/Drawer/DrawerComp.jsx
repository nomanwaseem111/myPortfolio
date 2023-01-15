import React, { useState } from 'react'
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';



const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}
       
      >
        <List id="drawer">

       
        <ListItemButton >
            <ListItemIcon>
              <ListItemText >
                <Button href="/" sx={{textTransform:{xs:"capitalize"},color:{xs:"#fff"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"20px"}}} >Home</Button>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 
          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/about" sx={{textTransform:{xs:"capitalize"},color:{xs:"#fff"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}}> About</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/portfolio" sx={{textTransform:{xs:"capitalize"},color:{xs:"#fff"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}}> Portfolio</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/experience" sx={{textTransform:{xs:"capitalize"},color:{xs:"#fff"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}} >Experience</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         


          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/contact" sx={{textTransform:{xs:"capitalize"},color:{xs:"#fff"},marginLeft:{xs:"50px"},fontSize:{xs:"20px"},mt:{xs:"10px"}}} >Contact</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

         

        </List>

      </Drawer>
      <IconButton sx={{ color: "white", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
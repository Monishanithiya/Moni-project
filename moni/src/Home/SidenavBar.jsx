import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';


const drawerWidth = '15%';

export default function Sidenav() {
  return (
          <>                    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              height: '85%',
              bgcolor: '#302E2E',
              color: '#FFFFFF',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Home', 'Search', 'My Library'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  { index === 0 ? <HomeRoundedIcon sx={{color:'white'}}/> : null}
                  { index === 1 ? <SearchRoundedIcon sx={{color:'white'}}/> : null}
                  { index === 2 ? <LibraryMusicRoundedIcon sx={{color:'white'}}/> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List style = {{position: "absolute", bottom: "0" ,width: '100%'}}>
          {['Settings'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  { index === 0 ? <SettingsIcon sx={{color:'white'}}/> : null}
                 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
     
        
      </Drawer>
      </>      
  );
}

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
//import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from '@mui/material';


const drawerWidth = 240;

export default function SideBar(){
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar position='fixed' sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}>

            </AppBar>
            <Drawer sx={{width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant='permanent'
            anchor='left'
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Dashboard', 'Profile', 'jotain', 'tähän vois laittaaa'].map((text)=>(
                        <ListItem key={text} disablePadding >
                            <ListItemButton>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Kattokaa', 'Tää', 'Isoi', 'juttui tulos'].map((text)=>(
                        <ListItem key={text} disablePadding >
                            <ListItemButton>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>
            </Drawer>

        </Box>
    )
}
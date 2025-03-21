
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
                </Typography>
            </Box>
        </Box>
    )
}
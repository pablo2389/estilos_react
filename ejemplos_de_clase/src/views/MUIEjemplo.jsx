import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';


import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'



import reptile from '../assets/img/contemplative-reptile.jpg'
import mountain from '../assets/img/mountain.jpg'

// Definir el tamaño de la barra lateral
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;

  // Si la barra está abierta o cerrada en modo mobile
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Barra lateral izquierda
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // Resetear estilos
  const styleBase = {
    textAlign: "left",
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
  }

  const filaStyle = {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "margin": "10px",
    "padding": "10px",
    "gap": "10px",
  }

  return (
    <Box sx={styleBase}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Layout responsivo
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, paddingLeft: "30px", width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div>
            <span>Este ejemplo se construyó en base al ejemplo "Responsive drawer"</span>
            <a target="_blank" rel="noreferrer" href="https://mui.com/material-ui/react-drawer/">(doc link)</a>
        </div>

        <div style={filaStyle}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={reptile}
              alt="iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Selva
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sumérgete en la exuberante selva para encontrarte con la vibrante iguana.
                Maravíllate con su piel brillante y su mirada curiosa mientras disfrutas de la diversidad de la fauna en LATAM.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Leer más</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={mountain}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Montaña
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Embárcate en una aventura emocionante hacia la cima de esta majestuosa montaña. 
                  Admira panoramas impresionantes y siente la brisa
                  fresca mientras conquistas nuevas alturas en LATAM.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Leer más</Button>
            </CardActions>
          </Card>
        </div>


      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
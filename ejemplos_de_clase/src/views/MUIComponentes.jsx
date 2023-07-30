import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  CardMedia,
} from "@mui/material";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';


import reptile from '../assets/img/contemplative-reptile.jpg'
import mountain from '../assets/img/mountain.jpg'
import laura from '../assets/img/laura.jpg'

const MUIComponentes= ()=> {

    const filaStyle = {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-around",
      "margin": "10px",
      "padding": "10px",
      "gap": "10px",
    }

    const separador = {
      "backgroundColor": "darkGreen",
      "borderRadius": "10px",
      "width": "100%",
      "padding": "10px",
    };

    return (
      <div style={{"width": "80%", "padding": "30px"}}>

        <div style={filaStyle}>
          <div style={separador}>
            <span>Botones </span>
            <a target="_blank" rel="noreferrer" href="https://mui.com/material-ui/react-button/">(doc link)</a>
          </div>
        </div>

        <div style={{...filaStyle, "backgroundColor": "ghostwhite"}}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>

        <div style={{...filaStyle, "backgroundColor": "ghostwhite"}}>
          <Button variant="contained" color="secondary">color secondary</Button>
          <Button variant="contained" color="success">color success</Button>
          <Button variant="contained" sx={{backgroundColor: "darkorange"}}>color custom</Button>          
        </div>

        <div style={filaStyle}>
          <div style={separador}>
            <span>Avatar </span>
            <a target="_blank" rel="noreferrer" href="https://mui.com/material-ui/react-avatar/">(doc link)</a>
          </div>
        </div>

        <div style={filaStyle}>
          <Avatar alt="Laura" src={laura} sx={{width: 56, height: 56}}/>
          <Avatar alt="Juan" sx={{bgcolor: "red"}} >J</Avatar>
          <Avatar alt="Montaña" src={mountain} sx={{width: 56, height: 56}}/>
        </div>

        <div style={filaStyle}>
          <div style={separador}>
            <span>Chip </span>
            <a target="_blank" rel="noreferrer" href="https://mui.com/material-ui/react-chip/">(doc link)</a>
          </div>
        </div>

        <div style={filaStyle}>
          <Chip
            avatar={<Avatar alt="Laura" src={laura} />}
            label="Laura"
            variant="filed"
            size="medium"
            color="primary"
          />
          <Chip
            label="¡BIen!"
            variant="filed"
            size="medium"
            color="success"
          />
        </div>

        <div style={filaStyle}>
          <div style={separador}>
            <span>Select </span>
            <a target="_blank" rel="noreferrer" href="https://mui.com/material-ui/react-select/">(doc link)</a>
          </div>
        </div>

        <div style={{...filaStyle, "backgroundColor": "white"}}>
          <FormControl variant="filled" sx={{ width: 300 }}>
            <InputLabel id="select-filled-label">Edad</InputLabel>
            <Select
              labelId="select-filled-label"
              id="select-filled"
              value={10}
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>diez</MenuItem>
              <MenuItem value={20}>veinte</MenuItem>
              <MenuItem value={30}>treinta</MenuItem>
            </Select>
          </FormControl>

          <Autocomplete
            disablePortal
            id="autocomplete"
            options={["caja", "pelota", "paleta", "casa"]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <div style={filaStyle}>
          <div style={separador}>
            <span>Card </span>
            <a target="_blank" rel="noreferrer" href="https://mui.com/material-ui/react-card/">(doc link)</a>
          </div>
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
      </div>
    );
  }

export default MUIComponentes;
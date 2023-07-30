
# Solución del ejercicio de práctica
En este archivo encontrará la solución del paso a paso del ejercicio en cuestion. Utilice este archivo como ayuda en caso de quedar bloqueado en algún punto del desafio.

# Paso a paso

1. Crea un nuevo proyecto de React.
2. Instala las dependencias adicionales ejecutando el comando <code>npm install @mui/material react-router-dom</code>.
3. Abre el archivo "src/App.js" y reemplaza el código existente con el siguiente código:

```js
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Home, About, Contact } from "./components/index";
import "./App.css";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

4. Crea una nueva carpeta llamada "components" dentro del directorio "src".
5. Dentro de la carpeta "components", crea tres archivos: "Home.jsx", "About.jsx" y "Contact.jsx".
6. Abre el archivo "src/components/Home.jsx" y añade el siguiente código:

```js
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome to the Home Page</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://via.placeholder.com/150'
          alt='Kitten'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Kitten Card
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            This is a cute kitten card using Material-UI styles.
          </Typography>
          <CardMedia>
            <Button variant='contained'>Agregar</Button>
            <Button color='error'>Eliminar</Button>
          </CardMedia>
        </CardContent>
      </Card>
    </div>
  );
}
```

7. Añade estos estilos globales:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

nav ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}

li {
  margin: 10px;
}

.container {
  background-color: blue;
  padding: 20px;
}
h1 {
  color: white;
}
```

8. Abre el archivo "src/components/About.jsx" y añade el siguiente código:

```js
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>About Us</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://via.placeholder.com/150'
          alt='Kitten'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Kitten Card in About
          </Typography>
          <Typography
            variant='subtitle'
            component='span'
            color='text.secondary'
          >
            This is a cute kitten card with modular styles in About.
          </Typography>
          <CardMedia>
            <Button variant='contained'>Agregar</Button>
            <Button color='error'>Eliminar</Button>
          </CardMedia>
        </CardContent>
      </Card>
    </div>
  );
}
```

9. Crea un archivo llamado "about.module.css" dentro de la carpeta "components" y añade el siguiente código:

```css
.container {
  background-color: red;
  padding: 20px;
}

.h1 {
  color: grey;
  text-transform: uppercase;
}
```

10. Abre el archivo "src/components/Contact.jsx" y añade el siguiente código:

```js
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image='https://via.placeholder.com/150'
          alt='Kitten'
        />
        <CardContent>
          <Typography gutterBottom variant='h3' component='div'>
            Kitten Card in Contact
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            This is a cute kitten card with modular styles in Contact.
          </Typography>
          <CardMedia>
            <Button variant='contained'>Agregar</Button>
            <Button color='error'>Eliminar</Button>
          </CardMedia>
        </CardContent>
      </Card>
    </div>
  );
}
```

11. Crea un archivo llamado "contact.module.css" dentro de la carpeta "components" y añade el siguiente código:

```css
.container {
  background-color: blue;
  padding: 20px;
}

.h1 {
  color: white;
}
```

12. Ejecuta "npm start" en la terminal para iniciar la aplicación.

Ahora deberías tener una aplicación de React con tres páginas: Home, About y Contact. Cada página mostrará una tarjeta con estilos de Material-UI y módulos CSS. En Home.jsx sólo se aplicarán estilos globales. Podés navegar entre las páginas utilizando los enlaces del encabezado.

Aclaración: La tarjeta renderizada de Material UI es la que esta por defecto en el sitio oficial, se le agregó un par de botones.

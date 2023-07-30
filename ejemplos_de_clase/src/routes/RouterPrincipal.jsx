import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Aquí importamos todas las vistas/páginas que utilizará el router
import Home from "../views/Home"
import ModuleCSS from "../views/ModuleCSS"
import StyleJS from "../views/StyleJS"
import MUIComponentes from "../views/MUIComponentes"
import MUIEjemplo from "../views/MUIEjemplo"

import Error404 from "../views/Error404"

import Navbar from "../components/Navbar/Navbar"

const RouterPrincipal=()=>{
  return(
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navbar />}>  
            <Route index element={<Home />} />
            <Route path="/module-css" element={<ModuleCSS />} />
            <Route path="/style-js" element={<StyleJS />} />
            <Route path="/mui-componentes" element={<MUIComponentes />} />
          </Route>
          
          <Route path="/mui-ejemplo" element={<MUIEjemplo />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default RouterPrincipal;


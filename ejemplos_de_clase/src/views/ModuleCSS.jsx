import Boton from "../components/Boton/Boton";
import Tarjeta from "../components/Tarjeta/Tarjeta";

import reptile from '../assets/img/contemplative-reptile.jpg'
import mountain from '../assets/img/mountain.jpg'

const ModuleCSS=()=>{
    return(
        <div>
            <Boton />

            <Tarjeta img={mountain}>
                Embárcate en una aventura emocionante hacia la cima de esta
                majestuosa montaña. 
                Admira panoramas impresionantes y siente la brisa
                fresca mientras conquistas nuevas alturas en LATAM.
            </Tarjeta>

            <Tarjeta img={reptile}>
                Sumérgete en la exuberante selva para encontrarte con la vibrante iguana.
                Maravíllate con su piel brillante y su mirada curiosa mientras disfrutas de la diversidad de la fauna en LATAM.
            </Tarjeta>
        </div>
    )
}

export default ModuleCSS;

import Nombre from "../components/Nombre/Nombre";


const StyleJS=()=>{

    // Estilos almacenados en una variable JS
    const styles = {
        "color": "white",
        "background": "#052833",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "padding":"30px"
    }

    return(
        // Estilos aplicados directo en el HTML
        <div style={
            {
              "width": "80%",
              "backgroundColor": "darkgreen",
              "padding": "30px"
            }
        }
        >

            {/* // Estilos aplicados desde un archivo JS */}
            <div style={styles}>
                hola, soy una caja renderizada por propiedades
            </div>

            <Nombre />


        </div>
    )
}

export default StyleJS;

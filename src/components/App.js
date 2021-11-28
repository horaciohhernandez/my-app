import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


const App = () => {


   
    const saludo = "Vivir con el ALMA"
    const tituloMain = "Bienvenido al E-Commerce!!!"

    const producto = { titulo: "Producto 1" }
    

    //let contador = 0
    //const resultado = useState(0)
    //const contador = resultado[0]
    //const setContador = resultado[1]

    const contadorInicial = 0

    const [contador, setContador] = useState(contadorInicial)
    const [mensaje, setMensaje] = useState("Todavia no hay nada, cargando...")
    const [productos,setProductos] = useState([])

    const aumentarContador = () => {
        console.log("Aumentar contador")
        //contador++
        //contador = contador + 1
        setContador(contador + 1)
        //console.log(contador)
    }

    return (
        <>
            <Header producto={producto} saludo={saludo}/>
            <Main productos={productos} tituloMain={tituloMain}>
                <h1>Test Props</h1>
                <p>{mensaje}</p>
                <p>El contador va : {contador}</p>
                <button onClick={aumentarContador} >aumentar</button>
            </Main>            
            <Footer saludo={saludo} />

           
        </>

    )
}

export default App;
import Button from 'react-bootstrap/Button'
import ItemListContainer from './ItemListContainer'



const Main = ({productos,children}) => {

    return (
        <main>
            <h2>Bienvenidos al E-Commerce</h2>
            {children}
            
            {productos.map((elemento,indice)=>{
                return <p>{elemento.nombre}</p>
            })}
           
            <ItemListContainer greeting="Agaregar al Carrito"/>
            <Button variant="primary">Agregar</Button>
        </main>
    )
}

export default Main

import Button from 'react-bootstrap/Button'
import ItemListContainer from './ItemListContainer'

const Main = () => {

    return (
        <main>
            <h2>Home</h2>
            {children}
            
            {productos.map((elemento,indice)=>{
                return <p>{elemento.nombre}</p>
            })}

            <ItemListContainer greeting="Bienvenidos al E-Commerce!"/>
            <Button variant="primary">Boton</Button>
        </main>
    )
}

export default Main

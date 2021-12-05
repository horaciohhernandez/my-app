import NavBar from "./NavBar";
import CartWidget from "./CartWidget";


const Header = ({saludo}) => {
    return (
        <header id="main-header">
            <h1>{saludo}</h1>
            <NavBar/>
            <CartWidget/>            
        </header>
    )
}

export default Header;
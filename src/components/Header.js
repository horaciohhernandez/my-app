
import NavBar from "./NavBar"

const Header = ({saludo}) => {
    return (
        <header id="main-header">
            <h1>{saludo}</h1>
            
            <NavBar/>
            
        </header>
    )
}

export default Header;
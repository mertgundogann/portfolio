import { NavLink } from "react-router";
import './css/Navbar.css'
function Navbar(){
    return(
        <nav className="nav">
        <NavLink to="/">Anasayfa</NavLink>
         <NavLink to="/hakkimda">Hakkımda</NavLink>   
         <NavLink to="/projeler">Projeler</NavLink>
         <NavLink to="/iletisim">İletişim</NavLink>
        </nav>
    )
}
export default Navbar;
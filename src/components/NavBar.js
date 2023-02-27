import logo from "../imagenes/logo.png";
import CartWidget from './CartWidget';


export default function NavBar() {
    return (
        <header>
            <div className="nav1">
                <select className="nav2">
                    <option>bermudas</option>
                    <option>campera</option>
                    <option>jeans</option>
                </select>
                <div>
                    <a href="index.html"><img src={logo} alt="Logo"/></a>
                </div>
                <CartWidget/>
            </div >
        </header>

    )

}
import Categoria from "./Categoria";

import bermudas from "../imagenes/bermuda1.jpg";
import campera from "../imagenes/campera1.jpg";
import jeans from "../imagenes/jeans rotos.jpg";


export default function Botones() {

    const categorias = [{ nombre: "bermudas", img: bermudas }, { nombre: "campera", img: campera }, { nombre: "jeans", img: jeans }]


    return (

        <ul className="ropa">
            {categorias.map((categoria, idx) => <Categoria key={idx} nombre={categoria.nombre} imgSrc={categoria.img} />)}

        </ul>

    )

}
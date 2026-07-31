import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import "./NavBar.css"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src="/images/logo.png" alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#018546" }} />)
                        : (<FaBars size={30} style={{ color: "#018546" }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li><a href='http://boquiteo.com/'>Delivery</a></li>
                            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><a>Menú +</a></li>
                            <ul className={"nav-menu-submenu" + (isMenuOpen ? " open" : "")}>
                                <li><a className="linkmenu" href="https://cdn.shopify.com/s/files/1/0268/3093/0000/files/Menu_desayunos_la_pista.pdf?v=1785334806">Desayunos</a></li>
                                <li><a className="linkmenu" href="https://cdn.shopify.com/s/files/1/0268/3093/0000/files/Menu_La_Pista_Alimentos.pdf?v=1785334806">Almuerzos/Cenas</a></li>
                            </ul>
                            <li><a href='https://eatapp.co/reserve/la-pista-20fb20'>Reservaciones</a></li>
                            <li><a href='contact'>Eventos especiales</a></li>
                            <li><a href='galery'>Galería</a></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

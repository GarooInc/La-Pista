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
                                <li><a className="linkmenu" href="https://drive.google.com/file/d/1bvbwKChnsehmhgbiWXLTbLYyVPFJhSyO/view?mcp_token=eyJwaWQiOjE3NjkxNTMzNTY5Njc1MSwic2lkIjoyNjQ1ODcyMDEsImF4IjoiNzdiZWI2ZmM1NmE2NjYyNjhmNDhiZGE0OGUzZGQ4ZmYiLCJ0cyI6MTY5MzU5MzI3OCwiZXhwIjoxNjk2MDEyNDc4fQ.hWUeKmGMaTU2-ai71S6LkU3QjgD5RIalQNj13kyIpt8">Desayunos</a></li>
                                <li><a className="linkmenu" href="https://drive.google.com/file/d/1mk2Vo0pIqcEK0BYtWd_i3bW27-H-KKCc/view?mcp_token=eyJwaWQiOjE3NjkxNTMzNTY5Njc1MSwic2lkIjoyNjQ1ODcyMDEsImF4IjoiN2E0OWU0NjhjMjQxZTQyMzA2MzI1ZDU1ODEzOTZjYTciLCJ0cyI6MTY5MzUwNzM5NSwiZXhwIjoxNjk1OTI2NTk1fQ.uGo6D_sD-fe3w1HncnCk4q8EL84xehJZ4-xIvugQYmM">Almuerzos/Cenas</a></li>
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
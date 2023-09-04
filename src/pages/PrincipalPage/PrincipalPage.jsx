
import React, {useState} from "react"
import styles from "./PrincipalPage.module.css"
import Title from "../../components/Title/Title"
import Footer from "../../components/Footer/Footer"

const PrincipalPage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const textoArray = [ 
        "La historia del Restaurante La Pista es una verdadera historia de emprendimiento y pasión por los negocios. Todo comenzó en 2007 cuando dos primos, Miguel y Rodrigo, decidieron empezar un proyecto juntos. Su idea inicial era construir un club de carros de control remoto, y tras investigar y buscar la representación de una marca japonesa, se pusieron manos a la obra para construir la primera pista de carritos off-road de Guatemala.",

        "No solo construyeron la pista, también levantaron una cabaña de madera rústica que le dio al lugar un encanto único. La madre de Miguel, Ana, fue la encargada de llevar adelante la construcción y poner su propio estilo en ella. Así fue como en 2007 nació el club GTZ RACING, y rápidamente se convirtió en un éxito. Los fines de semana había competencias, eran más de 40 socios que pagaban su membresía y compraban carritos y repuestos. Con el tiempo, la gente empezó a referirse al lugar como 'La Pista'.",
        
        "En 2008, sin embargo, algo inesperado empezó a cambiar la dirección del negocio. El hermano de Rodrigo, el Chef Rick, diseñó 4 bocatas para vender a los socios del club, pero pronto empezaron a llegar clientes que no tenían nada que ver con los carritos de control remoto. Las bocatas se volvieron famosas, y cada día llegaban más clientes al lugar.", 
        
        "En 2009, Chef Rick se unió oficialmente al equipo y decidieron transformar el lugar en un restaurante al 100%. Con el apoyo de sus padres, pudieron poner el lugar en condiciones, comprar equipo y vajilla, y un tío les regaló todas las mesas y sillas para el restaurante. El lugar quedó rústico y encantador, y en honor a su historia, decidieron mantener el nombre de La Pista.", 
        
        "Sin embargo, la primera decisión importante que tomaron fue cerrar el club de carritos para dedicarse de lleno al restaurante. Se propusieron una regla fundamental: lo único que importa es que los clientes se vayan contentos. En la noche de la apertura, imprimieron el primer menú en papel bond sin saber si los clientes encontrarían el lugar, pero con mucha fe y la experiencia del Chef Rick, empezaron a recibir mesas desde el primer turno.", 
        
        "Desde entonces, nunca han tenido un turno en blanco y siempre han atendido a al menos una persona en cada turno, manteniendo el récord durante casi 14 años. En septiembre de 2009, inauguraron oficialmente el restaurante La Pista, y desde entonces, han continuado haciendo lo único que hace que un restaurante tenga éxito: asegurarse de que los clientes regresen. La historia de La Pista es un verdadero ejemplo de cómo la creatividad, el apoyo de la familia y la pasión por el negocio pueden crear un éxito duradero."
    ]

    const [visibleParagraphs, setVisibleParagraphs] = useState(1)


    return (
        <div className={styles.principalPage}>
            <section id='/' className={styles.home}>
                <div className={styles.home__content}>
                    <img src='/images/logo.png' alt='logo' className={styles.home__content__logo} />
                    <nav className={styles.home__content__nav}>
                        <ul>
                            <li><a href='http://boquiteo.com/'>Tienda</a></li>
                            <li onClick={() => setIsMenuOpen(!isMenuOpen)}><a>Menú +</a></li>
                            <ul className={`${styles.home__content__nav__submenu} ${isMenuOpen ? styles.open : ""}`}>
                                <li><a href="https://drive.google.com/file/d/1bvbwKChnsehmhgbiWXLTbLYyVPFJhSyO/view?mcp_token=eyJwaWQiOjE3NjkxNTMzNTY5Njc1MSwic2lkIjoyNjQ1ODcyMDEsImF4IjoiNzdiZWI2ZmM1NmE2NjYyNjhmNDhiZGE0OGUzZGQ4ZmYiLCJ0cyI6MTY5MzU5MzI3OCwiZXhwIjoxNjk2MDEyNDc4fQ.hWUeKmGMaTU2-ai71S6LkU3QjgD5RIalQNj13kyIpt8">Desayunos</a></li>
                                <li><a href="https://drive.google.com/file/d/1mk2Vo0pIqcEK0BYtWd_i3bW27-H-KKCc/view?mcp_token=eyJwaWQiOjE3NjkxNTMzNTY5Njc1MSwic2lkIjoyNjQ1ODcyMDEsImF4IjoiN2E0OWU0NjhjMjQxZTQyMzA2MzI1ZDU1ODEzOTZjYTciLCJ0cyI6MTY5MzUwNzM5NSwiZXhwIjoxNjk1OTI2NTk1fQ.uGo6D_sD-fe3w1HncnCk4q8EL84xehJZ4-xIvugQYmM">Almuerzos/Cenas</a></li>
                            </ul>
                            <li><a href='https://eatapp.co/reserve/la-pista-20fb20'>Reservaciones</a></li>
                            <li><a href='galery'>Galería</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section id='nosotros' className={styles.nosotros}>
                <div className={styles.nosotros__content}>
                    <Title title1="HACER UNA COCINA QUE DISTINGA LO MEJOR DEL PRODUCTO DISPONIBLE"  color="#000" fontsize="28px" center/>
                    <div className={styles.nosotros__content__text}>
                        {textoArray.slice(0, visibleParagraphs).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {visibleParagraphs < textoArray.length && (
                            <button onClick={() => setVisibleParagraphs(visibleParagraphs + 1)} className={styles.nosotros__content__text__button}>
                                Leer más
                            </button>
                        )}
                    </div>
                </div>
            </section>
            <div className={styles.elementor__divider}>
                <span className={styles.elementor__divider__text}>
                </span>
            </div>
            <section id='footer' className={styles.footer}>
                <div className={styles.footer__content}>
                    <Footer />
                </div>
            </section>
            <div className={styles.lastfooter}>
                <img src='/images/waves.png' alt='waves' className={styles.waves} />
                <div className={styles.lastfooter__content}>
                    <span className={styles.lastfootertext}>Km 9.5 Carretera a Muxbal Guatemala, 01051, GT</span>
                </div>
            </div>
        </div>
    )
}

export default PrincipalPage
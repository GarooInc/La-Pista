import React from "react"
import PropTypes from "prop-types"
import styles from "./Footer.module.css"

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footercontainer}>
                <div className={styles.footercontainerleft}>
                    <span className={styles.footercontainertitle}>Horarios</span>
                    <span className={styles.footercontainertext}>Lunes a Sábado: 9:00 am a 10:00 pm</span>
                    <span className={styles.footercontainertext}>Domingo: 9:00 am a 4:00 pm</span>
                </div>
                <div className={styles.footercontainerright}>
                    <div className={styles.footercontainerrighttop}>
                        <span className={styles.footercontainertitle}>Ubicación</span>
                        <span className={styles.footercontainertext}>Km 9.5 Carretera a Muxbal Guatemala, 01051.</span>
                        <button className={styles.footercontainerbutton} type="button" onClick={ () => window.open("https://www.google.com/maps/place/Restaurante+La+Pista/@14.5583979,-90.4721467,16z/data=!4m6!3m5!1s0x8589a499486e2b17:0xfb5b9bfd68149e16!8m2!3d14.5589035!4d-90.4735276!16s%2Fg%2F11c59wd2hm?hl=es&entry=ttu", "_blank")}>Cómo llegar</button>
                    </div>
                    <div className={styles.footercontainerrightbottom}>
                        <span className={styles.footercontainertitle}>Contacto</span>
                        <div className={styles.footercontainericons}>
                            <a href="https://www.facebook.com/lapistarestaurante/" className="footer-social">
                                <img src="/images/fb.svg" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/lapista_/" className="footer-social">
                                <img src="/images/ig.svg" alt="Instagram" />
                            </a>
                            <a href="mailto:info@boquiteo.com" className="footer-social">
                                <img src="/images/mail.svg" alt="email" />
                            </a>
                        </div>
                        <span className={styles.footercontainertext}><a href="callto:+502 3174 6160">Tel: +502 3174 6160</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {
}

export default Footer

                

                   
import React,{useState} from "react"
import styles from "./Contact.module.css"
import { navigate } from "../../store"

const Contact = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        typeevent: "",
        date : "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        for (const key in formData) {
            if (formData[key] === "") {
                setPopupMessage("Por favor, llena todos los campos.")
                setShowPopup(true)
                setTimeout(() => {
                    setShowPopup(false)
                }
                , 2000)
                return
            }
        }

        try {
            const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setPopupMessage("Formulario enviado exitosamente!")
                setShowPopup(true)
                setTimeout(() => {
                    setShowPopup(false)
                    navigate("/")
                }, 3000)
            } else {
                setPopupMessage("Error al enviar el formulario. Inténtalo de nuevo.");
                setShowPopup(true)
            }
        } catch (error) {
            console.error("Hubo un error:", error)
        }
    }
    
    return (
        <div className={styles.container}>
            {showPopup && (
                <div className={styles.popup}>
                    <p>{popupMessage}</p>
                </div>
            )}
            <div className={styles.contact__content__info__container}>
                <h2> A continuación puede ponerse en contacto con Restaurante La Pista. </h2>
                <p className={styles.contact__content__info__p}> Deja tu mensaje y nos pondremos en contacto contigo lo antes posible. </p>
            </div>
            <div className={styles.contactinfo}>
                <div className={styles.contactright}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombre" name="from_name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                        <input type="text" placeholder="Correo" name="reply_to" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                        <input type="text" placeholder="Teléfono" name="cellphone" value={formData.cellphone} onChange={(e) => setFormData({ ...formData, cellphone: e.target.value })}/>
                        <span className={styles.contactright__span}>Fecha tentativa</span>
                        <input 
                            type="date" 
                            placeholder="10/01/2024" 
                            name="date" 
                            value={formData.date} 
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            min={new Date().toISOString().split("T")[0]}
                        />
                        <span className={styles.contactright__span}>Tipo de evento</span>
                        <select name="type_event" id="" value={formData.typeevent} onChange={(e) => setFormData({ ...formData, typeevent: e.target.value })}>
                            <option value="Boda">Boda</option>
                            <option value="Bautizo">Bautizo</option>
                            <option value="Primera Comunión">Primera Comunión</option>
                            <option value="Cumpleaños">Cumpleaños</option>
                            <option value="Graduación">Graduación</option>
                            <option value="Aniversario">Aniversario</option>
                            <option value="Reunión de trabajo">Reunión de trabajo</option>
                            <option value="Evento Corporativo">Evento Corporativo</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <textarea
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Comentario"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <button type="submit" className={formData.name === "" || formData.email === "" || formData.message === "" || formData.typeevent === "" || formData.date === "" ? styles.contactright__button_disabled : styles.contactright__button}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

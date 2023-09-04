import React from "react"
import PropTypes from "prop-types"
import "./Title.css"

const TitleComponent = ({ title1, title2, underlined, column, color, paddingright, fontsize, center }) => {
    const style = { color, paddingRight: paddingright, fontSize: fontsize }

    return (
        <div className={underlined ? "titleunderlined" : "titlecolumn"}>
            <div className={ title1 ? "linetittle" : "nolinetittle"} style={ center ? { justifyContent: "center" } : { justifyContent: "flex-start" }}>
            <span className='title1' style={ style }>{title1}</span>
            </div>
            <span className='title2' style={style}>{title2}</span>
        </div>
    )
}

TitleComponent.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    underlined: PropTypes.bool,
    column: PropTypes.bool,
    color: PropTypes.string,
    paddingright: PropTypes.string,
    fontsize: PropTypes.string
}

export default TitleComponent

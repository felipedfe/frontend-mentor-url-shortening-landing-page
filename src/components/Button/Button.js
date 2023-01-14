import React from 'react';
import './button.css'

function CallToActionBtn(props) {
    return <button
        type="button"
        className={`cta-btn ${props.className ? props.className : ""}`}
        onClick={props.handleClick ? props.handleClick : null}
    >
        {props.children}
    </button>
}

export default CallToActionBtn;

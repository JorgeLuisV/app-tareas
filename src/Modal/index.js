import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

function Modal({ children }) {
    // createPortal recibe dos parámetros: elemento a transportar, lugar a transportar
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('mymodal') // Ubicado en: public/index.html
    )
}

export {Modal}
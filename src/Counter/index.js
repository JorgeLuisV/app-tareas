import React from 'react'
import './MainCounter.css'
import { MainContext } from '../Context'

function Counter() {
    // Usar consumer del context: forma 2
    const {completed, total} = React.useContext(MainContext)

    const message = total === 0 ? 'Debes registrar una tarea'
                    : total > 0 && completed === total ? '¡Has completado todas tus tareas!'
                    : `Has completado ${completed} de ${total} tarea(s).`
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100)
    
    return (
        <div className='counter'>
            <p className='counter-text'>{message}</p>

            <div className='progress-text'>
                <span>Progreso</span>
                <span>{progress}%</span>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

export {Counter}
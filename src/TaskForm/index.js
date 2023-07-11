import React from "react"
import './TaskForm.css'
import { MainContext } from "../Context"

function TaskForm() {
    // Estados
    const [taskValue, setTaskValue] = React.useState('')

    // Contexto
    const { addtask, modalValue, setModalValue } = React.useContext(MainContext)

    // Acciones
    const addTask = (e) => {
        e.preventDefault()
        
        addtask(taskValue)

        setModalValue(false)
    }

    return(
        <form className="taskForm" onSubmit={addTask}>
            <label>Crear tarea</label>
            <textarea
                rows="4"
                placeholder="Escribe una tarea"
                value={taskValue}
                onChange={(e) => {
                    setTaskValue(e.target.value)
                }}
            required/>
            <div className="formActions">
                <button
                    type="button"
                    className="formBtn cancel"
                    
                    onClick={() => {
                        setModalValue(!modalValue)
                    }}
                >Cancelar</button>
                <button type="submit" className="formBtn create">Crear</button>
            </div>
        </form>
    )
}

export { TaskForm }
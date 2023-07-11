import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// Creando un contento
const MainContext = React.createContext()

// Creando un provider del contexto
function MainProvider({ children }) {
    // Estados
    const {
        items: tasks, // Renombrando propiedades de un JSON
        saveItems: saveTasks, // Renombrando propiedades de un JSON
        loading,
        error
    } = useLocalStorage('myTasks', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [modalValue, setModalValue] = React.useState(false)
    
    // Obtener valores
    const completed = tasks.filter(task => !!task.completed).length // la doble negación (!!) sirve para devolver valores booleanos
    const total = tasks.length
    const searchMatches = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()))
    
    // Acciones
    const toggleTask = (text) => {
        const myTasks = [...tasks], // Crea una copia de las tareas (lo hace inmutable)
            taskIdx = tasks.findIndex(task => task.text === text),
            selTask = myTasks[taskIdx]

        selTask.completed = !selTask.completed

        saveTasks(myTasks)
    }
    const addtask = (text) => {
        const myTasks = [...tasks]

        myTasks.push({text, completed: false})

        saveTasks(myTasks)
    }
    const deleteTask = (text) => {
        const myTasks = [...tasks],
            taskIdx = tasks.findIndex(task => task.text === text)

        myTasks.splice(taskIdx, 1)

        saveTasks(myTasks)
    }

    // Cualquier componente que esté dentro del provider va a poder acceder a las propiedades de value
    return (
        <MainContext.Provider value={{
            completed,
            total,
            searchValue,
            setSearchValue,
            searchMatches,
            toggleTask,
            addtask,
            deleteTask,
            loading,
            error,
            modalValue,
            setModalValue
        }}>
            { children }
        </MainContext.Provider>
    )
}

export { MainContext, MainProvider }
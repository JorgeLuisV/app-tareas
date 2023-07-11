import React from 'react';

import { Counter } from '../Counter';
import { Search } from '../Search';
import { List } from '../List';
import { Task } from '../Task';
import { Newtask } from '../NewTask';

import { FaGear } from "react-icons/fa6";

import { MainContext } from '../Context';
import { Modal } from '../Modal';
import { TaskForm } from '../TaskForm';

// Ejemplo de Stateless Component: Componentes que solo manejan la intefaz JSX
function AppUI() {
    /*
        // Usar consumer del context: forma 1

        <MainContext.Consumer>
            {
                ({ loading, error }) => (
                    <List>
                        {loading && <p style={{textAlign: 'center'}}><FaGear className='spin'/> Cargando...</p>}
                        {error && <p style={{textAlign: 'center'}}>Se produjo un error al cargar</p>}
                    </List>
                )
            }
        </MainContext.Consumer>
    */

    const {
        searchMatches,
        toggleTask,
        deleteTask,
        loading,
        error,
        modalValue
    } = React.useContext(MainContext)

    return (
        <React.Fragment>

            <Search/>
            <Counter/>

            <h1 style={{
                'margin': '0',
                'fontSize': '1.2em',
                'fontWeight': 'normal',
                'marginBottom': '1em'
            }}>Mis tareas</h1>
            <List>
                {loading && <p style={{textAlign: 'center'}}><FaGear className='spin'/> Cargando...</p>}
                {error && <p style={{textAlign: 'center'}}>Se produjo un error al cargar</p>}
                {(!loading && searchMatches.length === 0) && <p>No se encontraron coincidencias</p>}
                {searchMatches.map(task => (
                    <Task
                        key={task.text}
                        text={task.text}
                        completed={task.completed}
                        toggleTask={() => toggleTask(task.text)}
                        deleteTask={() => deleteTask(task.text)}
                    />
                ))}
            </List>

            <Newtask/>
            {modalValue && (
                <Modal>
                    <TaskForm />
                </Modal>
            )}

        </React.Fragment>
    );
}

export { AppUI }
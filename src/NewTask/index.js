import './MainNewtask.css'
import { MainContext } from '../Context'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Newtask() {
  const {modalValue, setModalValue} = React.useContext(MainContext)

    return (
      <button
        className='NewTaskBtn'
        onClick={() => {
          setModalValue(!modalValue)
        }}
      >
        <FaPlus/>
      </button>
    )
}

export { Newtask }
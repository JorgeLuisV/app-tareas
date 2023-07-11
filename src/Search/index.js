import React from "react"
import { MainContext } from "../Context"
import { FaMagnifyingGlass } from "react-icons/fa6";

import './Search.css'

function Search() {
  // Usar consumer del context: forma 2
  const {searchValue, setSearchValue} = React.useContext(MainContext)

  /*
    EFFECTS
    Encapsulan lógica pesada o demorada para que sólo se ejecute cuando lo necesitamos, no cada vez que renderizamos.
    
    Primer parámetro: lógica a ejecutar.
    Segundo parámetro:
    • Sin 2° parámetro: se ejecuta al final por cada nuevo render.
    • Array vacío []: se ejecuta al final solo la primera vez.
    • Array con valores [val1, val2,...]: se ejecuta cada vez que alguno de los valores del array cambia.
  */

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchValue) console.log('Realizando búsqueda:', searchValue)
    }, 500)

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <div className="search-group">
      <FaMagnifyingGlass className="search-icon"/>
      <input
        className="search"
        placeholder="Buscar tareas"
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  )
}

export {Search}
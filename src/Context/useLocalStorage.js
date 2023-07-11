import React from 'react';

// const myTasks = [
//   {text: 'Limpiar casa', completed: true},
//   {text: 'Hacer compras', completed: false},
//   {text: 'Preparar postre', completed: false},
//   {text: 'Leer libro', completed: false},
//   {text: 'Comprar avión', completed: false},
// ]

// localStorage.setItem('myTasks', JSON.stringify(myTasks))
// localStorage.removeItem('myTasks')

function useLocalStorage(itemName, initvalue) {
  // Estados
  const [items, setItems] = React.useState(initvalue)
  const [loading, setLoading] = React.useState(true)
  const [error , setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const itemsFromStorage = window.localStorage.getItem(itemName)

        if (!itemsFromStorage) {
          setItems(initvalue)
        } else {
          setItems(JSON.parse(itemsFromStorage))
        }

        setLoading(false)
      } catch (error) {
        console.error(error)

        setLoading(false)
        setError(true)
      }
    }, 2000)
  },[])

  // Acciones
  const saveItems = (items) => {
    window.localStorage.setItem(itemName, JSON.stringify(items))
    setItems(items)
  }

  return {items, saveItems, loading, error}
}

export { useLocalStorage }
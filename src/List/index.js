import './List.css'

function List({children}) {
    return (
      <ul className='task-list'>
        {children}
      </ul>
    )
}

export {List}
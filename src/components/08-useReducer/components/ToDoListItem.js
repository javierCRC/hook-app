import React from 'react'

export const ToDoListItem = ( {pToDo2 = [], pIndex , pF_handleToggleTask2 , pF_f_handleClickDelete2 }) => {
    return (
        <li
            className="list-group-item"
        >
            <p 
                className= { `${ pToDo2.done && 'complete'}` }
                onClick ={ ()=> pF_handleToggleTask2(pToDo2.id) }
            > { pIndex + 1 }.{ pToDo2.desc } 
            </p> 

            <button className='btn btn-sm btn-danger'
                    onClick={ () => pF_f_handleClickDelete2(pToDo2.id) }
            >
               Delete <i className="fas fa-trash-alt"></i>
            </button>

        </li>
    )
}

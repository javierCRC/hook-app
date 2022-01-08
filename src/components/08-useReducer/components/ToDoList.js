import React from 'react'
import { ToDoListItem } from '../../08-useReducer/components/ToDoListItem';

export const ToDoList = ( { pTodo = [] , pF_handleToggleTask, pF_f_handleClickDelete } ) => {
    return (
        <ul>
            {
                                        
                   pTodo.map( ( vTodo , i) => ( 
                    <ToDoListItem 
                                   key = { pTodo.id } 
                                   pToDo2={ vTodo } 
                                   pIndex={ i } 
                                   pF_handleToggleTask2={ pF_handleToggleTask } 
                                   pF_f_handleClickDelete2={ pF_f_handleClickDelete }
                    />
                ))
            }   
        </ul>
    ) 
}

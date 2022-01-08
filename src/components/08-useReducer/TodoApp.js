import React, {  useReducer, useEffect } from 'react'

import { f_todoReducer } from './function';

import { f_ToastAlert } from '../../helpers';
import { ToDoList } from '../08-useReducer/components/ToDoList';
import { ToDoAdd } from '../08-useReducer/components/ToDoAdd';

import './style.css';

// THIS FUNCTION IS USED FOR RECOVERY  AND INITIALIZE THE STATE OF THE REDUCER
const f_init = ()=> {
    return JSON.parse(localStorage.getItem('JsonArrToDo')) || [] ;
}



export const TodoApp = () => {

    const [ vTodos, dispatch ] = useReducer(f_todoReducer, [] , f_init);
    
        //console.log(vTodos);
    
    // we use the hook useEffect to save in the local storage every time to vTodos change...
    useEffect(() => {
       
        localStorage.setItem('JsonArrToDo', JSON.stringify(vTodos));

    }, [vTodos]);

    const f_handleClickDelete = ( pToDoId ) => {
        console.log(pToDoId);

        //const c_respon = f_MessageDecision("Delete",`ToDo id: ${ pToDoId }`);
        
        
        const c_DeleteToDo = {
            id : pToDoId
        };

        const c_action = {
            type: 'delete',
            payload: c_DeleteToDo
        }
  
        
        dispatch ( c_action );

        f_ToastAlert("success","ToDo deleted succesfull");
        
    }

    // this fuction is for mark completed or pending one especific task.
    const f_handleToggleTask = ( pToDoId ) => {

        const c_TogleToDo = {
            id : pToDoId
        };

        const c_action = {
            type: 'toggle',
            payload: c_TogleToDo
        }

        dispatch ( c_action ); 
    }

    const f_handleAddToDo = (p_NewTodo) => {
       
        const c_action = {
            type: 'add',
            payload: p_NewTodo
        }

        dispatch ( c_action ); // sending the action to the reducer 

        f_ToastAlert("success","ToDo added succesfully");
    }
    
    
    
    return (
        <div>

            <h1>Todo App ({ vTodos.length }) with useReduce </h1>
            <hr />

                <div className='row'>

                        <div className='col-12 col-sm-7'>
                                Todo's
                                
                                <ToDoList 
                                          pTodo={ vTodos } 
                                          pF_handleToggleTask={ f_handleToggleTask } 
                                          pF_f_handleClickDelete={ f_handleClickDelete } 
                                />

                        </div>

                        <div className='col-12 col-sm-5'>
                                
                                <ToDoAdd 
                                   pF_handleAddTodo = { f_handleAddToDo }
                                />

                        </div>
                
                
                </div>
        </div>
    )
}

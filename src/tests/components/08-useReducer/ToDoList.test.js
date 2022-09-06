import { shallow } from "enzyme";

import { arrToDos } from "../../fixtures/demoToDos";
import { ToDoList } from '../../../components/08-useReducer/components/ToDoList';
import '@testing-library/jest-dom'; 


describe('Pruebas de <ToDoList >', () => {
    
     
    const vF_handleToggleTask = jest.fn(); 
    const vf_handleClickDelete = jest.fn();
 
     const cWrapper = shallow(<ToDoList pTodo = { arrToDos  } 
                                                    pF_handleToggleTask = { vF_handleToggleTask }
                                                    pF_f_handleClickDelete = { vf_handleClickDelete }
                                                    />
                                     );
    
    test('1.Must do render the component ToDoList.', () => {
        
        // 1 Arrange *******************************************************************************
            
        //2. Act *******************************************************************************
            //console.log(cWrapper.html());

        //3. Assert *******************************************************************************
             expect(cWrapper).toMatchSnapshot();

    });

    test('2.Must be have two <ToDoListItem />.', () => {
        
        // 1 Arrange *******************************************************************************
             let vCountToDoListItem = 0;
             let vCountToDoListItemExpected = arrToDos.length;

        //2. Act *******************************************************************************
             vCountToDoListItem = cWrapper.find('ToDoListItem').length;
               //console.log('count: '+ vCountToDoListItem );  

        //3. Assert *******************************************************************************
             expect(vCountToDoListItem).toBe(vCountToDoListItemExpected);
            
    });

    test('2.Must be have the function ToDoListItem -> pF_f_handleClickDelete2.', () => {
        
        // 1 Arrange *******************************************************************************
             let vHaveDeleteFunction;
             let vFunctionExpected = expect.any(Function);

        //2. Act *******************************************************************************
              vHaveDeleteFunction = cWrapper.find('ToDoListItem').at(0).prop('pF_f_handleClickDelete2');

               //console.log('Delete Function: '+ vHaveDeleteFunction );  

        //3. Assert *******************************************************************************
             expect(vHaveDeleteFunction).toEqual( vFunctionExpected );
            
    });

    test('3.Must be have the function ToDoListItem -> pF_handleToggleTask2.', () => {
        
        // 1 Arrange *******************************************************************************
             let vHaveToggleFunction;
             let vFunctionExpected = expect.any(Function);
             
        //2. Act *******************************************************************************
              vHaveToggleFunction = cWrapper.find('ToDoListItem').at(0).prop('pF_handleToggleTask2');

               //console.log('Toggle Function: '+ vHaveToggleFunction );  

        //3. Assert *******************************************************************************
             expect(vHaveToggleFunction).toEqual( vFunctionExpected );
            
    });

    
})

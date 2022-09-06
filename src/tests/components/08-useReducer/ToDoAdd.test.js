import { shallow } from "enzyme";

import { arrToDos } from "../../fixtures/demoToDos";
import { ToDoAdd } from '../../../components/08-useReducer/components/ToDoAdd';
import '@testing-library/jest-dom'; 


describe('Test of <ToDoAdd />', () => {
    
     
    const vF_handleAddTodo = jest.fn(); 
    
 
     const cWrapper = shallow(<ToDoAdd pF_handleAddTodo = { vF_handleAddTodo  }          
                               />
                                     );
    
    test('1.Must do render the component ToDoAdd.', () => {
        
        // 1 Arrange *******************************************************************************
            
        //2. Act *******************************************************************************
             //console.log(cWrapper.html());

        //3. Assert *******************************************************************************
              expect(cWrapper).toMatchSnapshot();

    });

    test('2.Must dont be call the function pF_handleAddTodo.', () => {
        
        // 1 Arrange *******************************************************************************
             let vFormSubmit;
             

        //2. Act *******************************************************************************
             vFormSubmit = cWrapper.find('form').prop('onSubmit');
                //console.log('function submit: '+ vFormSubmit );  
            vFormSubmit({ preventDefault(){} }) // another form to call a function  

        //3. Assert *******************************************************************************
             expect(vF_handleAddTodo).toHaveBeenCalledTimes(0);
            
    });

    test('3.Must be correctly call the function pF_handleAddTodo simulating change and submit.', () => {
        
        // 1 Arrange *******************************************************************************
            let vFormChange1;
        
            let vFormSubmit;
                
            const c_SimulateEvent  = {
                target: {
                    name: 'txtDescription',
                    value: 'Learn React with JS in 2022'
                }
            };


            const c_NewTodo = {
                id : expect.any(Number),
                desc: 'Learn React with JS in 2022',
                done: false
            };

            let vTxtDescription;
             

        //2. Act *******************************************************************************
                  vFormChange1 = cWrapper.find('input').simulate('change',c_SimulateEvent ); // form 1 to simulate a event
                     //console.log('function change 1: '+ vFormChange1 );
                 
                  vFormSubmit = cWrapper.find('form').prop('onSubmit');
                     //console.log('function submit: '+ vFormSubmit );  
                  vFormSubmit({ preventDefault(){} }) // another form to call a function 
                  
                  vTxtDescription = cWrapper.find('input').prop('value');
                
        //3. Assert *******************************************************************************
              expect(vF_handleAddTodo).toHaveBeenCalledTimes(1);
              expect(vF_handleAddTodo).toHaveBeenCalledWith(c_NewTodo);
              expect(vTxtDescription).toBe(''); // this for test the functionality of f_handleCleanForm
            
    });

    
})

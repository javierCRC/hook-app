//import { shallow } from "enzyme";
import { f_todoReducer } from "../../../../components/08-useReducer/function";
import { arrToDos } from "../../../fixtures/demoToDos";
import '@testing-library/jest-dom'; 


describe('Pruebas de todoReducer', () => {
    
    test('1.Must do render the default state', () => {
        
        // 1 Arrange *******************************************************************************
      
        //2. Act *******************************************************************************

            const cToDos = f_todoReducer(arrToDos, {});
            //console.log(cToDos);
        //3. Assert *******************************************************************************
            expect( cToDos).toEqual(arrToDos);

    });

    test('2.Must do add new toDo', () => {
        
        // 1 Arrange *******************************************************************************
                 
                const p_NewTodo = {
                    id:3,
                    desc:'Learn how to do test in React.js',
                    done:false
                };

                const c_action = {
                    type: 'add',
                    payload: p_NewTodo
                };

                let vCountElement;

        //2. Act *******************************************************************************

            const cToDos2 = f_todoReducer(arrToDos, c_action);
            
            vCountElement = cToDos2.length;

            //console.log(cToDos2);
            //console.log(vCountElement);
        //3. Assert *******************************************************************************
            expect( vCountElement ).toBe(3);
            expect( cToDos2).toEqual([...arrToDos,p_NewTodo]);

    });

    test('3.Must do delete a toDo', () => {
        
        // 1 Arrange *******************************************************************************
                 
                const c_DeleteToDo = {
                    id : 1
                };

                const c_action = {
                    type: 'delete',
                    payload: c_DeleteToDo
                };

                let vCountElement;

        //2. Act *******************************************************************************

            const cToDos3 = f_todoReducer(arrToDos, c_action);
            
            vCountElement = cToDos3.length;

            //console.log(cToDos2);
            //console.log(vCountElement);
        //3. Assert *******************************************************************************
            expect( vCountElement ).toBe(1);
            expect( cToDos3).toEqual( [ arrToDos[1] ] );

    });

    test('4.Must do toggle a toDo', () => {
        
        // 1 Arrange *******************************************************************************
                 
            const c_TogleToDo = {
                id : 1
            };

            const c_action = {
                type: 'toggle',
                payload: c_TogleToDo
            }

            const arrToDosExpected = [{
                id:1,
                desc:'Learn Raect with Js',
                done:true
            },{
                id:2,
                desc:'Learn Raect with Ts',
                done:true
            }
           ];

        //2. Act *******************************************************************************

            const cToDos4 = f_todoReducer(arrToDos, c_action);
            
            const cDone1 = cToDos4[0].done;
            
            //console.log(cToDos4);
            //console.log(vCountElement);
        //3. Assert *******************************************************************************
            //expect( vCountElement ).toBe(1);
            expect(cDone1).toBe(true);
            expect( cToDos4[1]).toEqual( arrToDosExpected[1] );
            expect( cToDos4).toEqual(arrToDosExpected);

    });
    
})

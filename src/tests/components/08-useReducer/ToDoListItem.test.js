import { shallow } from "enzyme";

import { arrToDos } from "../../fixtures/demoToDos";
import { ToDoListItem } from '../../../components/08-useReducer/components/ToDoListItem';
import '@testing-library/jest-dom'; 


describe('Pruebas de <ToDoListItem />', () => {
    
     
    const vF_handleToggleTask = jest.fn(); 
    const vf_handleClickDelete = jest.fn();
    let vIndex = 1; 
    
     const cWrapper = shallow(<ToDoListItem pToDo2 = { arrToDos[0]  } 
                                                    pIndex = { vIndex } 
                                                    pF_handleToggleTask2 = { vF_handleToggleTask }
                                                    pF_f_handleClickDelete2 = { vf_handleClickDelete }
                                                    />
                                     );
    
    test('1.Must do render the component ToDoListItem.', () => {
        
        // 1 Arrange *******************************************************************************
            
        //2. Act *******************************************************************************
            //console.log(cToDos);

        //3. Assert *******************************************************************************
             expect(vF_handleToggleTask).toMatchSnapshot();

    });

    test('2.Must be called the function pF_handleToggleTask2.', () => {
        
        // 1 Arrange *******************************************************************************
             let vId = arrToDos[0].id;

        //2. Act *******************************************************************************
             cWrapper.find('p').simulate('click');

        //3. Assert *******************************************************************************
             expect(vF_handleToggleTask).toHaveBeenCalledWith(vId);
            
    });

    test('3.Must be called the function pF_f_handleClickDelete2.', () => {
        
        // 1 Arrange *******************************************************************************
             let vId = arrToDos[0].id;

        //2. Act *******************************************************************************

             cWrapper.find('button').simulate('click');

       //3. Assert *******************************************************************************
            expect(vf_handleClickDelete).toHaveBeenCalledWith(vId);
            
             //expect(cWrapper).toMatchSnapshot();
            
    });

    test('4.Must do render the text succesfully.', () => {
        
        // 1 Arrange *******************************************************************************
             let vText;
             let vTextExpected = `${ arrToDos[0].id + 1 }.${arrToDos[0].desc}`;

        //2. Act *******************************************************************************
             vText = cWrapper.find('p').text().trim();
             //console.log(vText);

        //3. Assert *******************************************************************************
             //expect(cWrapper).toMatchSnapshot();
             expect( vText).toBe(vTextExpected);

    });

    test('5.Must do exists the class complete at the p element.', () => {
        
     // 1 Arrange *******************************************************************************
          let vExistClassComplete; // form 1
          let vExistClassComplete2; // form 2
          
          const cWrapper2 = shallow(<ToDoListItem pToDo2 = { arrToDos[1] } 
                                                  pIndex = { vIndex }
                                    />
                                     );

     //2. Act *******************************************************************************
          vExistClassComplete = cWrapper2.find('.complete').exists();
          vExistClassComplete2 = cWrapper2.find('p').hasClass('complete');
           //console.log(cWrapper2.html());
          //console.log('exist .complete: '+vExistClassComplete);

     //3. Assert *******************************************************************************
         expect(vExistClassComplete).toBe(true);
         expect(vExistClassComplete2).toBe(true);

 });

   
    
})

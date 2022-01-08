import { renderHook,act } from '@testing-library/react-hooks';
import { useForm } from '../hooks/useForm';

describe('Test in customHook <useForm />', () => {

    const c_InitForm = {
        name: 'Javier Mendoza Blandon',
        email: 'javiereduardom.b22@gmail.com'
    }


    test('1.Must do to return the default values of the components.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
        //stateValues , f_handleInputChange, f_handleCleanForm
            
            let vStateValues;
            let vFhandleInputChange;
            let vFhandleCleanForm;

            const c_Expected  = {
                name: 'Javier Mendoza Blandon',
                email: 'javiereduardom.b22@gmail.com'
              };
           
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useForm(c_InitForm) );
            //console.log( result.current);

            vStateValues = result.current.stateValues;
            vFhandleInputChange = typeof result.current.f_handleInputChange;
            vFhandleCleanForm = typeof result.current.f_handleCleanForm;

            //console.log("state: "+vStateValues+" -> F handleInputChange: "+vFhandleInputChange+" -> F handleCleanForm: "+vFhandleCleanForm);
            
            //console.log("state: "+vStateValues);

        //3. Assert *******************************************************************************

            expect(vStateValues).toEqual(c_Expected);
            expect(vFhandleInputChange).toBe('function');
            expect(vFhandleCleanForm).toBe('function');
            
        

        

    });


    test('2.Must do change the name in the init form using the funtion f_handleInputChange.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
                let vStateValues;
            
                const c_SimulateEvent  = {
                    target: {
                        name: 'name',
                        value: 'Eduardo Mendoza Blandon'
                    }
                };

                const c_InitFormExpected = {
                    ...c_InitForm,
                    name: 'Eduardo Mendoza Blandon'
                }
                    
          
        //2. Act *******************************************************************************

                const { result } = renderHook( ()=> useForm(c_InitForm) );
                //console.log( result.current);
                
                const { f_handleInputChange } = result.current;

            

                act( () => {

                    f_handleInputChange(c_SimulateEvent);

                });

                vStateValues = result.current.stateValues;
                //console.log("StateValues despues de: "+vStateValues);
            
        //3. Assert *******************************************************************************

                expect(vStateValues).toEqual(c_InitFormExpected);
            
    });


    test('3.Must do reset the init form using the funtion f_handleInputChange.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
                let vStateValues;
            

                const c_SimulateEvent  = {
                    target: {
                        name: 'name',
                        value: 'Eduardo Mendoza Blandon'
                    }
                };

                const c_Expected  = {
                    name: 'Javier Mendoza Blandon',
                    email: 'javiereduardom.b22@gmail.com'
                  };
                    
          
        //2. Act *******************************************************************************

                const { result } = renderHook( ()=> useForm(c_InitForm) );
                //console.log( result.current);
                
                const {  f_handleInputChange, f_handleCleanForm } = result.current;

            

                act( () => {

                    f_handleInputChange(c_SimulateEvent);

                    f_handleCleanForm();

                });

                vStateValues = result.current.stateValues;
                //console.log("StateValues despues de: "+vStateValues);
            
        //3. Assert *******************************************************************************

                expect(vStateValues).toEqual(c_Expected);
            
    });

    
});

import { renderHook,act } from '@testing-library/react-hooks';
import { useFetch } from '../hooks/useFetch';
import '@testing-library/jest-dom';

describe('Test in customHook <useFetch />', () => {


    test('1.Must do to return the default values of the components.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
        //stateValues , f_handleInputChange, f_handleCleanForm
            
            
            
            let vUrlApi = 'https://breakingbadapi.com/api/quotes/1';
           
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useFetch(vUrlApi) );
            //console.log( result.current);

            const { pLoading, pError, pData} = result.current;
        

        //3. Assert *******************************************************************************

            expect(pData).toBe(null);
            expect(pLoading).toBe(true);
            expect(pError).toBe(null);
    });

    test('2.Must do to return the data, loading in false and error in null.', async() => {
        
        
        // 1 Arrange *******************************************************************************
           
                let vUrlApi = 'https://breakingbadapi.com/api/quotes/1';
               
        //2. Act *******************************************************************************

                const { result, waitForNextUpdate } = renderHook( ()=> useFetch(vUrlApi) );
                await  waitForNextUpdate({timeout:2000});
                  //console.log( result.current);

                const { pLoading, pError, pData} = result.current;
        

        //3. Assert *******************************************************************************

                expect(pData.length).toBe(1);
                expect(pLoading).toBe(false);
                expect(pError).toBe(null);
    });

    test('3.Must do manage the catch of the fetch whe the url api is wrong.', async() => {
        
        
        // 1 Arrange *******************************************************************************
           
                let vUrlApi = 'https://reqres.in/apid/users?page=2';
               
        //2. Act *******************************************************************************

                const { result, waitForNextUpdate } = renderHook( ()=> useFetch(vUrlApi) );
                await  waitForNextUpdate({timeout:2000});
                  //console.log( result.current);

                const { pLoading, pError, pData} = result.current;
        

        //3. Assert *******************************************************************************

                expect(pData).toBe(null);
                expect(pLoading).toBe(false);
                expect(pError).toBe("dont be obtain the data");
    });


    

    
});

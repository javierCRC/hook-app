import { renderHook,act } from '@testing-library/react-hooks';
import { useCounter2 } from '../hooks/useCounter2';

describe('Test in customHook <useCounter2 />', () => {

    test('1.Must do to return the default values of the components.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
            let vCounter;
            let vFIncrement;
            let vFDecrement;
            let vFReset;
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useCounter2() );
            //console.log( result.current);

            vCounter = result.current.counter;
            vFIncrement = typeof result.current.f_Increment;
            vFDecrement = typeof result.current.f_Decrement;
            vFReset = typeof result.current.f_Reset;

            //console.log("Counter: "+vCounter+" -> F increment: "+vFIncrement+" -> F Decrement: "+vFDecrement+" -> F Reset: "+vFDecrement);
            
        //3. Assert *******************************************************************************

            expect(vCounter).toBe(1);
            expect(vFIncrement).toBe('function');
            expect(vFDecrement).toBe('function');
            expect(vFReset).toBe('function');
        

        

    });

    test('2.Must do return the counter value sent like value in the components.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
            let vCounter2;
            
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useCounter2(1995) );
            //console.log( result.current);

            vCounter2 = result.current.counter;
            

            //console.log("Counter2: "+vCounter2);
            
        //3. Assert *******************************************************************************

            expect(vCounter2).toBe(1995);
            
    });

    test('3.Must do increment in 1 the counter value using the funtion f_increment.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
            let vCounter3;
            
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useCounter2(1995) );
            //console.log( result.current);
            
            const { f_Increment } = result.current;

            act( () => {

                f_Increment();

            });

            vCounter3 = result.current.counter;
            

            //console.log("Counter2: "+vCounter2);
            
        //3. Assert *******************************************************************************

            expect(vCounter3).toBe(1996);
            
    });

    test('4.Must do decrement in 1 the counter value using the funtion f_Decrement.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
            let vCounter4;
            
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useCounter2(1995) );
            //console.log( result.current);
            
            const { f_Decrement } = result.current;

            act( () => {

                f_Decrement();

            });

            vCounter4 = result.current.counter;
            

            //console.log("Counter2: "+vCounter2);
            
        //3. Assert *******************************************************************************

            expect(vCounter4).toBe(1994);
            
    });

    test('5.Must do reset the counter value using the funtion f_Reset.', () => {
        
        
        // 1 Arrange *******************************************************************************
      
            let vCounter5;
            
          
        //2. Act *******************************************************************************

            const { result } = renderHook( ()=> useCounter2(1995) );
            //console.log( result.current);
            
            const { f_Decrement,f_Reset } = result.current;

            act( () => {

                f_Decrement();
                f_Reset();

            });

            vCounter5 = result.current.counter;
            

            //console.log("Counter2: "+vCounter2);
            
        //3. Assert *******************************************************************************

            expect(vCounter5).toBe(1995);
            
    });
    
});

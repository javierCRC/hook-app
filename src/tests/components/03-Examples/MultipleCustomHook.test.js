import { renderHook,act } from '@testing-library/react-hooks';
import { MultipleCustomHook } from '../../../components/03-Examples/MultipleCustomHook';
import { shallow } from "enzyme"
import { useFetch } from '../../../hooks/useFetch';
import { useCounter2 } from '../../../hooks/useCounter2';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter2');

describe('Test in component <MultipleCustomHook />', () => {

    
    
    test('1.Must do render the component MultipleCustomHook.', () => {
        
        
        // 1 Arrange *******************************************************************************
           
            useCounter2.mockReturnValue({
                counter: 10,
                f_Increment: ()=> {},
                f_Decrement: ()=> {}
            });

           useFetch.mockReturnValue({
              pData: null,
              pLoading: true,
              pError: null
           });

        //2. Act *******************************************************************************

             const cWrapper = shallow(<MultipleCustomHook />);
    
        //3. Assert *******************************************************************************

            expect(cWrapper).toMatchSnapshot();
            
    });

    test('2.should do show the information about the component.', () => {
        
        
        // 1 Arrange *******************************************************************************
                
                useCounter2.mockReturnValue({
                    counter: 10,
                    f_Increment: ()=> {},
                    f_Decrement: ()=> {}
                });

                useFetch.mockReturnValue({
                    pData: [{
                        author: 'Javier Mendoza Blandon',
                        quote: " The good engeniering solve."
                    }],
                    pLoading: false,
                    pError: null
                });

                let vAlertLoading;
                let vQuoted;
                let vAuthor;

        //2. Act *******************************************************************************

            const cWrapper = shallow(<MultipleCustomHook />);
                  
            //console.log( cWrapper.html() );

                vAlertLoading = cWrapper.find('.alert').exists();
                vQuoted = cWrapper.find('.mb-0').text().trim();
                vAuthor = cWrapper.find('footer').text().trim();
                  //console.log('Alert: '+vAlertLoading+' -> Quote: '+vQuoted+' -> Author: '+vAuthor);
        
        //3. Assert *******************************************************************************

            expect(vAlertLoading).toBe(false);
            expect(vAuthor).toBe('Javier Mendoza Blandon');
            expect(vQuoted).toBe('The good engeniering solve.');          
    });

    
});

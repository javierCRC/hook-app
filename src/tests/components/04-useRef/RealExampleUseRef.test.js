import { renderHook,act } from '@testing-library/react-hooks';
import { RealExampleUseRef } from '../../../components/04-useRef/RealExampleUseRef';
import { shallow } from "enzyme"


describe('Test in component <RealExampleUseRef />', () => {

    
    
    test('1.Must do render the component RealExampleUseRef.', () => {
        
        
        // 1 Arrange *******************************************************************************
             
              let vExistComponent;
          
        //2. Act *******************************************************************************

             const cWrapper = shallow(<RealExampleUseRef />);
             
             vExistComponent = cWrapper.find('MultipleCustomHook').exists();

        //3. Assert *******************************************************************************

            expect(cWrapper).toMatchSnapshot();
            expect(vExistComponent).toBe(false); // the  component dont be exists yet

            //console.log( cWrapper.html() );
            
    });

   test('2.should be render the component MultipleCustomHook simulating click.', () => {
        
        
        // 1 Arrange *******************************************************************************
             
        let vExistComponent2;
          
        //2. Act *******************************************************************************

             const cWrapper = shallow(<RealExampleUseRef />);

             cWrapper.find('button').simulate('click');

             vExistComponent2 = cWrapper.find('MultipleCustomHook').exists();

        //3. Assert *******************************************************************************

            
            expect(vExistComponent2).toBe(true); // the  component dont be exists yet
       
    });

    
});

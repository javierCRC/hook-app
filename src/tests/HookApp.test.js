import { shallow } from "enzyme"
import { HookApp } from "../HookApp"
import '@testing-library/jest-dom'; 


describe('Pruebas de <HookApp />', () => {
    
    test('Must do render the component HookApp', () => {
        
        // 1 Arrange *******************************************************************************
      
        //2. Act *******************************************************************************

        const cWrapper = shallow(<HookApp />);
    
        //3. Assert *******************************************************************************

        expect(cWrapper).toMatchSnapshot();

    })
    
})

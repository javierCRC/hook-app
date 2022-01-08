import { useEffect, useState, useRef } from 'react'

export const useFetch = ( pUrlEndPoint ) => {
   
    // example of use a hook with real example
    const vIsComponentMounted = useRef( true );

    const [state, setState] = useState({
        pData: null,
        pLoading: true,
        pError: null
    });

    //call the operation one time when the component is loaded.
    useEffect(() => {
        
        return () => {
            // the component is dismounted
            vIsComponentMounted.current = false;
        }
    },[])


    // only change when the pUrlEndPoint changed.
    useEffect(() => {

        setState({
            pLoading:true,
            pError: null,
            pData: null
        });
        
        fetch (pUrlEndPoint)
          .then ( respo => respo.json())
          .then( data => {

            //setTimeout(() => {

                if( vIsComponentMounted.current ){
                    setState({
                        pLoading:false,
                        pError: null,
                        pData: data
                    });
                }
                
            //}, 2000);
            
        
          }).catch(()=> {
                setState({
                    pLoading:false,
                    pError: 'dont be obtain the data',
                    pData: null
                });
          });

    }, [pUrlEndPoint])
    
    return state;

}

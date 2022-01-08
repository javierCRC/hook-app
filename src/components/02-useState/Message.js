import React,{ useEffect ,  useState } from 'react'

export const Message = () => {
    
    const [coorsState, setCoorsState] = useState({
        pX:0,
        pY:0
    });

    const { pX , pY } = coorsState;

    useEffect(() => {
        
          console.log('Monted component');
        const f_mouseMove = (e)=>{
            const C_coords = { pX: e.x, pY: e.y };     console.log(C_coords);
            setCoorsState(C_coords);
           
        } 

        window.addEventListener('mousemove', f_mouseMove);

        return () => {
           window.removeEventListener('mousemove',f_mouseMove);
           console.clear();
        }
    }, [])
    
    return (

        <>
             <h2>Eres muy genial</h2>  
             
             <p> X:{ pX } Y:{ pY } </p>
        </>
    )
}

import React from 'react'

export const ShowBtnIcrement = React.memo(({ pFunctionIncrement, pIncrment }) => {

    console.log('Rendering againt the component ShowBtnIcrement');
   

    return (
        <button className="btn btn-outline-dark m-2"
                onClick={  () => {
                    pFunctionIncrement(pIncrment); 
                }}
        >
                Increment 
        </button>
    )

});

import React from 'react'

// If we don't use the React.memo in this component will be to render on any change of other hook with useState
export const Small = React.memo(( { pCounter } ) => {
   
    console.log('Rendering the component SMALL');
   
    return (
        <small>
             { pCounter } 
        </small>
    )
});

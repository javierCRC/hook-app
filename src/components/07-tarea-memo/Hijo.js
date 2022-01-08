import React from 'react'

export const Hijo = React.memo(({ pNumero, f_incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => f_incrementar( pNumero ) }
        >
            { pNumero }
        </button>
    )

});

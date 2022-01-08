


export const f_todoReducer = ( pState = [], pAction) => {
  
    switch (pAction.type) {
        case 'add':
            return [...pState, pAction.payload ];
        //break;
        case 'delete':
            return pState.filter( vArrResult => vArrResult.id !== pAction.payload.id );
        
        case 'toggle':
            return pState.map ( vArrMap => (vArrMap.id === pAction.payload.id)
                   ? { ...vArrMap, done: !vArrMap.done } // implicit return 
                   : vArrMap // else
            );

        case 'toggle-old':
            return pState.map ( vArrMap => {

                if (vArrMap.id === pAction.payload.id) {
                    return {
                        ...vArrMap,
                        done: !vArrMap.done
                    }
                } else {
                    return vArrMap;
                }

            });
        default:
            return pState;
    }
    
}
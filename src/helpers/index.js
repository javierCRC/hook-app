import Swal from "sweetalert2";  


export const f_MessageProcess = ( pTitle, pMessage,pTypeMessage) => {

    Swal.fire({
        title: pTitle,
        text: pMessage,
        icon: pTypeMessage,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
}

export const f_MessageDecision = (pAction,pMessage) => {
    
  let v_response = false;
  
  Swal.fire({
    icon:'warning',
    title: `Do you want to ${pAction} the ${pMessage}?`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: pAction,
    denyButtonText: `Don't ${pAction}`,
    timer: 7500
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire(`${pAction}!!!`, 'Completed', 'success');
      v_response = true;
    } else if (result.isDenied) {
      Swal.fire(`${pAction} are not executed`, `${pMessage}`, 'info');
    }
  });

  return v_response;
}

export const f_ToastAlert = (pTypeAlert,pMessage) => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: pTypeAlert,
      title: pMessage
    });

}
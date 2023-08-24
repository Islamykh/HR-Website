function message(id){
    var text= document.getElementsByClassName('btn')[id+1];
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Application has been send :)',
        showConfirmButton: false,
        timer: 1500
      })

    text.innerHTML='Applyed';
    text.style.backgroundColor='green';
    
}
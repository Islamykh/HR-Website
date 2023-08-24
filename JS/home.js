
function clicked(){
  
   
swal.fire({
  title: 'Loading Search',
  html: 'Please Wait <b></b> .',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

}

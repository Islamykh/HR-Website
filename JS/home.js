
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
  });
}


// var IDchecked= document.getElementsByName("Id");
// var Casechecked=document.getElementsByName("Case");
// function chekNumber(){
//  if((IDchecked !="") && (Casechecked != "")){
//   if("-" in IDchecked ){
//     if (("-" in Casechecked)){
//       if("c" in Casechecked ){
//         swal.fire({
//           title: 'Loading Search',
//           html: 'Please Wait <b></b> .',
//           timer: 2000,
//           timerProgressBar: true,
//           didOpen: () => {
//             swal.showLoading()
//             const b = Swal.getHtmlContainer().querySelector('b')
//             timerInterval = setInterval(() => {
//               b.textContent = Swal.getTimerLeft()
//             }, 100)
//           },
//           willClose: () => {
//             clearInterval(timerInterval)
//           }
//         }).then((result) => {
//           /* Read more about handling dismissals below */
//           if (result.dismiss === Swal.DismissReason.timer) {
//             console.log('I was closed by the timer')
//           }
//         });

//       }
//       else
//       alert("Eroor! the case number must be have letter C");
//     }
//     else
//     alert("Eroor! Please add "-" in your case number");}

//   else
//   alert("Eroor! Please add "-" in your case number");

//  }
//  else
//  alert("Eroor! Please fill case number and ID number");


// }








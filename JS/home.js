var IDNum= document.getElementById("IDNum");
var CaseNum= document.getElementById("CaseNum");
IDNum.addEventListener("change",ChickNum)
CaseNum.addEventListener("change",ChickNum)

function ChickNum(){
var truevalue= ["0","1","2","3","4","5","6","7","8","9","-","c"]
var lengthIDNum=  document.getElementById("IDNum").value.length;
console.log(lengthIDNum);
console.log(truevalue.length)

if(lengthIDNum ==12){ // because the number of numbers at ID Number is equal 12 
  for(var i=0 ; i < lengthIDNum ; i++ ){ // to check the numbers: by number number :)
    for(var j=0; j < truevalue.length-1 ; j++){
      if(IDNum.value[i]==truevalue[j]){

        function clicked(){

          swal.fire({
          title: 'Loading Search',
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
      }
      
      else{
        document.getElementById("ErrorMass").style.display="block";

        
      }
}
}
}
}




// /* Function */

// function 
// doThing(){

// console.log(typeof(search.value))


// var check = 
// false;

// for (var i = 0; i < search.value.length; i++){
//for (varj=0;j<trueValues.length;j++){

// if (search.value[i]== trueValues[j]){

// console.log(typeof(search.value[i]))

// console.log(typeof(trueValues[j]))

// check 
// = true;

// console.log("true")

// break;

// }

// else{
// check 
// = false;
// console.log("false")
// }
// }
// if(check
// == 
// false){
// alert("Eroor! Please add only number in your ID number");

// document.getElementById("errorP").style.display
// = 
// "block";
// }
// else{
// }
// }
// }







// function clicked(){
//   swal.fire({
//     title: 'Loading Search',
//     html: 'Please Wait <b></b> .',
//     timer: 2000,
//     timerProgressBar: true,
//     didOpen: () => {
//       swal.showLoading()
//       const b = Swal.getHtmlContainer().querySelector('b')
//       timerInterval = setInterval(() => {
//         b.textContent = Swal.getTimerLeft()
//       }, 100)
//     },
//     willClose: () => {
//       clearInterval(timerInterval)
//     }
//   }).then((result) => {
//     /* Read more about handling dismissals below */
//     if (result.dismiss === Swal.DismissReason.timer) {
//       console.log('I was closed by the timer')
//     }
//   });
// }


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








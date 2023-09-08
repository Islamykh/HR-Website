function messaGe(){
    swal.fire({
        title: 'you are sure?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes! Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}
// var Name = document.getElementById("name").value.length;
// Name= addEventListener("change", checkfunc);
// var IDNumber=  document.getElementById("IDNumber").value.length;
// IDNumber= addEventListener("change", checkfunc);
// var caseNum= document.getElementById("caseNum").value;
// caseNum= addEventListener("change", checkfunc);
// var pass= document.getElementById("pass").value;
// pass= addEventListener("change", checkfunc);
// var BDay= document.getElementById("BDay").value;
// BDay= addEventListener("change", checkfunc);
// var PHNum =document.getElementById("PHNum").value;
// PHNum= addEventListener("change", checkfunc);
// function checkfunc(){
//   if(Name == 0){
//     document.getElementById("errorname").style.display="block";
//     console.log(10);
//   }
//   else{
//     console.log("1000");
//   }
//   if (IDNumber!="11"){
//     document.getElementById("errorID").style.display="block";
//     console.log(20);
//   }
//   else{
//     console.log(50);

//   }
// }


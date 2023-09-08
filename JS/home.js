function ChickNum(){
  var IDNum= document.getElementById("IDNum").value;
  var CaseNum= document.getElementById("CaseNum");
  var truevalue= ["0","1","2","3","4","5","6","7","8","9","-","c"];
  var l= IDNum.length;
  
  
  if(l==12)
    {
      for(var i=0;i<l;i++)
        {
          if(truevalue.includes(IDNum[i], 0)) {
            let timerInterval
            Swal.fire({
              title: 'Auto close alert!',
              html: 'I will close in <b></b> milliseconds.',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
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
              continue;

          }
          
          else 
          {
            document.getElementById("ErrorMass").style.display="block";
            break;
          }
        
        }
    }
    else{
      document.getElementById("ErrorMass3").style.display="block";

    }
  }
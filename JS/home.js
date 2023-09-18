function ChickNum(){
  var IDNum= document.getElementById("IDNum").value;
  var CaseNum= document.getElementById("CaseNum");
  var truevalue= ["0","1","2","3","4","5","6","7","8","9","-","c"];
  var l= IDNum.length;
  
  
  if(l==12)
    {
     var counter=0;
      for(var i=0;i<l;i++)
        {
          if(truevalue.includes(IDNum[i], 0)) {
              continue;
          }   
          else 
          {
            counter+=1
          }
        }
        if(counter>0){
           document.getElementById("ErrorMass").style.display="block";

        }
        else{
          
            let timerInterval
            Swal.fire({
              title: 'Search',
              html: 'Wait for finished search <b></b> milliseconds.',
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
                console.log('Wait for finished search')
              }
              })

        }
    }
    else{
      document.getElementById("ErrorMass3").style.display="block";

    }
  }
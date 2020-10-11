document.getElementById('loan-form').addEventListener('submit',function(e){

    //result
    document.getElementById('results').style.display='none'
     //loading
    document.getElementById('loading').style.display = 'block'
    setTimeout(calculateResults,2000)
    e.preventDefault()
})

//calculate
 
function calculateResults(){
    console.log('calculating')
    const amount = document.getElementById('amount')
    const intrest =document.getElementById('interest')
    const years=document.getElementById('years')
    const monthypayment= document.getElementById('monthly-payment')
    const totalpayment=document.getElementById('total-payment')
    const totalInterset = document.getElementById('total-interest')

    const principal=parseFloat(amount.value)
    const calculateIntrest=parseFloat(intrest.value) / 100 / 12;
    const  calculatePayment=parseFloat(years.value) * 12;

    // compute monthypayment
    const x =Math.pow(1+calculateIntrest,calculatePayment)
    const monthly=(principal*x*calculateIntrest)/(x-1);
    
    // adding value
      if(isFinite(monthly)){
         monthypayment.value=monthly.toFixed(2),
        totalpayment.value=(monthly * calculatePayment).toFixed(2)
         totalInterset.value=((monthly * calculatePayment)-principal).toFixed(2)

         document.getElementById('results').style.display='block'

         document.getElementById('loading').style.display='none'

      }else{
    
         showError('Enter valid text')
      }

    //   e.preventDefault()
   
    }


    function showError(error){
        const errorDiv=document.createElement('div')
        errorDiv.className='alert alert-danger';

        const card=document.querySelector('.card')
        const heading = document.querySelector('.heading')

       errorDiv.appendChild(document.createTextNode(error))

      card.insertBefore(errorDiv , heading)

      setTimeout(removealert,3000)
    
    }

    function removealert(){
        document.querySelector('.alert').remove()
    }



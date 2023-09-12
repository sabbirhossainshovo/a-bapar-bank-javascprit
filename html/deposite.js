document.getElementById('but-deposite').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount =parseFloat(newDepositeAmountString);



    
   const depositeTotalElement = document.getElementById('deposite-total');
   const PreviusDepositeTotalString = depositeTotalElement.innerText;
   const PreviusDepositeTotal=parseFloat(PreviusDepositeTotalString)
   //ok//

   
   const curentDepositTotl=PreviusDepositeTotal+newDepositeAmount;
   depositeTotalElement.innerText=curentDepositTotl;
   depositeField.value='';

  
   const balanceTotal = document.getElementById("balance-total");
   const balanceTotalInnerTextString = balanceTotal.innerText;
   const balanceTotalInnerText = parseFloat(balanceTotalInnerTextString);

   const corent = newDepositeAmount + balanceTotalInnerText;


balanceTotal.innerText=corent


  
})

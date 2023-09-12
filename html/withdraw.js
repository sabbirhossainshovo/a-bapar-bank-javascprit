document
  .getElementById("button-widthdraw")
  .addEventListener("click", function () {
    const withdrawFeald = document.getElementById("withdraw-feald");
    const withdrawFealdValueString = withdrawFeald.value;
    const newwithdrawFealdValue = parseFloat(withdrawFealdValueString);

    const WithdrawTotal = document.getElementById("Withdraw-total");
    const WithdrawTotalInnerTextString = WithdrawTotal.innerText;
    const WithdrawTotalInnerText = parseFloat(WithdrawTotalInnerTextString);

    const corentValue = WithdrawTotalInnerText + newwithdrawFealdValue;
    WithdrawTotal.innerText = corentValue;
    withdrawFeald.value = "";

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalInnerTextString = balanceTotal.innerText;
    const balanceTotalInnerText = parseFloat(balanceTotalInnerTextString);

    const corent = balanceTotalInnerText - newwithdrawFealdValue;
    balanceTotal.innerText = corent;
  });

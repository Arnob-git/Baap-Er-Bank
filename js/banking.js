
//handle deposite button event

document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmounttext = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmounttext);

    // update deposit total                          

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //clear the deposit input fied



    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalancetotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalancetotal;

    depositInput.value = '';
})




//handle witjhdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotral = parseFloat(previousWithdrawText);
    const newWithDRAWtOTAL = previousWithdrawTotral + newWithdrawAmount
    withdrawTotal.innerText = newWithDRAWtOTAL;

    //update balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalancetotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalancetotal;


    //CLEAR WITHDRAW INPUT

    withdrawInput.value = '';
})



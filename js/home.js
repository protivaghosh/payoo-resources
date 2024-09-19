// add money added
// step-1:add an even handler to the added money button inside the from
document.getElementById('button-add-money').addEventListener('click', function(event){
    //  prevent page load after from submit
    event.preventDefault();
    // console.log('money add button click')
    // step-2:get money to be added to the account
    const amountNumber = document.getElementById('amount-number').value;
    const digitNumber =document.getElementById('digit-number').value;
    console.log(amountNumber, digitNumber);
    // step-3:verify pin number
    // wrong way to validate pin number
    if(digitNumber === '1234'){
        console.log('adding to money added to account');
        // step-4: get the current balance
        const balance = document.getElementById('balance').innerText;
        console.log(balance);
        // step-5:addMoney input with balance
        const addMoneyNumber = parseFloat(amountNumber);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        // step-6:update the balance
        document.getElementById('balance').innerText=newBalance;
    }
    
    else{
        alert('fail to add money! please try again');
    }
})
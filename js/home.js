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
})
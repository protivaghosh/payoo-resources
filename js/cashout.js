document.getElementById('button-money').addEventListener('click', function(event){
    event.preventDefault();

const amountSection = document.getElementById('amount-section').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(amountSection, pinNumber);

if(pinNumber === '1234'){
    console.log('adding to money added to account');
    const balance = document.getElementById('balance').innerText;
        console.log(balance);
        const addMoneyNumber = parseFloat(amountSection);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber -  addMoneyNumber;
        console.log(newBalance);
        document.getElementById('balance').innerText=newBalance;
    }
    
    else{
        alert('fail to add money! please try again');
    }
})
document.getElementById('show-cashout').addEventListener('click', function(){
    // show cashout button clicked
    // console.log('show the cashout button');
    document.getElementById('cashout-from').classList.remove('hidden');
    // hide the add money from
    document.getElementById('add-money-from').classList.add('hidden');
});

// show and money from and hide the cash out from
document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-from').classList.remove('hidden');
    document.getElementById('cashout-from').classList.add('hidden');
})
// login button
// step-1:set event handler
document.getElementById('button-login').addEventListener('click', function(event){
//    step-2:prevent default behavior(prevent reloading browser) 
    event.preventDefault();
   
    // step-3:get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber =document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    // step-4:validate pin and phone
// this is temporary.you should like this
    if(phoneNumber === '5' && pinNumber ==='1234'){
        console.log('you are login');
        window.location.href='/home.html';
    }
    // step-5:allow user to use the website
    else{
        alert('wrong phn number or pin');
    }
    
})
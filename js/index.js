console.log('ami bari jai');
// login button
// step-1:set event handler
document.getElementById('button-login').addEventListener('click', function(event){
//    step-2:prevent default behavior(prevent reloading browser) 
    event.preventDefault();
    console.log('login button clicked');
    // step-3:get the phone number
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);
})
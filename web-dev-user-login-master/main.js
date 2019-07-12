//Active user login
"use strict"
//Event Listeners
document.getElementById('Btn').addEventListener('click', loginFunction)
//Event Functions
function loginFunction() {
    //Read Input
   let User = document.getElementById('User').value
 let Password = document.getElementById('password').value
    //Check for correct username/password
    if (User == "Jon.Doe@fakemail.com"){
        if (Password == "FakePassword1234"){
            document.getElementById('success').style.display = 'Inherit'
            document.getElementById('Failed').style.display = 'None'
            document.getElementById('user-incorrect').style.display = 'None'
            document.getElementById('password-incorrect').style.display = 'None'

        } else {
            document.getElementById('Failed').style.display = 'Inherit'
            document.getElementById('success').style.display = 'None'
            document.getElementById('user-incorrect').style.display = 'None'
            document.getElementById('password-incorrect').style.display = 'Inherit'
        }
        //Output Success/Failure to log user in
     } else if(User != "Jon.Doe@fakemail.com" && Password == "FakePassword1234") {
            document.getElementById('Failed').style.display = 'Inherit'
            document.getElementById('success').style.display = 'None'
            document.getElementById('user-incorrect').style.display = 'Inherit'
            document.getElementById('password-incorrect').style.display = 'None'

        } else {
            document.getElementById('Failed').style.display = 'Inherit'
            document.getElementById('success').style.display = 'None'
            document.getElementById('user-incorrect').style.display = 'Inherit'
            document.getElementById('password-incorrect').style.display = 'Inherit'
        }
}
 var signinEmail = document.getElementById("signinEmail");
 var signinPassword = document.getElementById("signinPassword");
 var  user_records = [];
 function login(){
    var signinEmail = document.getElementById("signinEmail").value;
     var signinPassword = document.getElementById("signinPassword").value;
    
    if(signinEmail.length == "" || signinPassword.length== "") {
        document.getElementById('incorrect').innerHTML='<span class="text-danger m-3">All inputs is required</span>'
    }

 }

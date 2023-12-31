

var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signlista = [];
var  user_records = [];

function addSign(){
         let signupName,signupEmail,signupPassword;
         signupName=document.getElementById("signupName").value;
         signupEmail=document.getElementById("signupEmail").value;
         signupPassword=document.getElementById("signupPassword").value;
       
    
     let user_records=new Array();
      user_records =JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
     if(user_records.some((v)=>{return v.signupEmail==signupEmail}))  {
         document.getElementById('massge').innerHTML='<span class="text-danger m-3">email already exists</span>'
     }
    else{
     user_records.push({
         "signupName":signupName,
         "signupEmail":signupEmail,
         "signupPassword":signupPassword
     });
     localStorage.setItem('users', JSON.stringify(user_records));
     console.log(user_records)
     document.getElementById('massge').innerHTML='<span class="text-success m-3">success</span>'
     }
     if(signupEmail.length == "" ||signupName .length == "" || signupPassword.length ==""){
        document.getElementById('massge').innerHTML='<span class="text-danger m-3">All inputs is required</span>'
     }
     clearForm()
     validateForm()
     
    }
    function clearForm(){
             signupName.value="";
             signupEmail.value="";
             signupPassword.value="";
        
         }




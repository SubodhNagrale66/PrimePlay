const pass_field = document.querySelector('.pass-key');
      const showBtn = document.querySelector('.show');
      showBtn.addEventListener('click', function(){
       if(pass_field.type === "password"){
         pass_field.type = "text";
         showBtn.textContent = "HIDE";
         showBtn.style.color = "#3498db";
       }else{
         pass_field.type = "password";
         showBtn.textContent = "SHOW";
         showBtn.style.color = "#222";
       }

      });

function ValidationLogin()
{
var Username=document.getElementById("username").value;
var password=document.getElementById("Pass").value;

var StoreEmail=localStorage.getItem('S_email');
var StorePassc=localStorage.getItem('S_passc');

if(Username ===""||password ===""){
        alert("Please Enter all details");
    }
    else if(Username.length < 5){
        alert("Please Enter Valid Email");
    }
    else if(password.length < 8){
        alert("Password must be atleast 8 character ");
    }
     else{
	if(Username == StoreEmail && password == StorePassc)
		
		{
		alert("Login Successful");
		window.open("../html/home.html",'_self');
		}
	else
		{
		alert(" Incorrect Details Login failed.Please Try Again");
		window.open("../html/index.html",'_self');
		}
	}
	
}


function Validation()
                  {
                  var email = document.getElementById("Email").value;
                  var pass = document.getElementById("pass").value;
                  var passc = document.getElementById("passc").value;
                  
    if(email===""||pass===""||passc===""){
        alert("Please Enter all details");
    }
    else if(email.length < 5){
        alert("Please Enter Valid Email");
    }
    else if(pass.length < 8||passc.length < 8){
        alert("Password must be atleast 8 character ");
    }
    else if(pass !== passc){
        alert("Password not matched ");
    }
    
     else{
		localStorage.setItem('S_email',email);
		localStorage.setItem('S_passc',passc);
		
            alert("Signed Up Successfully");
            window.open("../html/plans.html",'_self');
        }         
    
}




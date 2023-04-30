function register(event) {
    event.preventDefault();
    var name = document.getElementById("Name").value
    var email = document.getElementById("Email").value
    var password = document.getElementById("Password").value
    var confirmpassword = document.getElementById("confirmPassword").value


    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {
            if (password === confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("practice1-users")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if(!flag){
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                    }
                    Ls.push(userdata)
                    localStorage.setItem("practice1-users", JSON.stringify(Ls))
                    alert("Registration successful")
                    window.location.href="./login.html"
                    document.getElementById("Name").value = ""
                    document.getElementById("Email").value = ""
                    document.getElementById("Password").value = ""
                    document.getElementById("confirmPassword").value = ""
                }
                else{
                    alert("email already exist")
                }
              
            } else {
                alert("password not matched")
            }

        } else {
            alert("password should be atleast 8 or more characters")
        }

    } else {
        alert("please fill all fields")
    }

}



function login(event){
    event.preventDefault();

    var userEmail=document.getElementById("Email").value
    var userPassword=document.getElementById("Password").value

    var Ls= JSON.parse(localStorage.getItem("practice1-users"))
    var currentUser;
    var flag=false
    for(var i=0; i<Ls.length; i++){
        if(Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword){
            flag=true
            currentUser=Ls[i]
        }
    }
    if(flag){
        localStorage.setItem("pr1-currentUser",JSON.stringify(currentUser))
        alert("login successful")
        window.location.href="./home.html"
        document.getElementById("Email").value=""
        document.getElementById("Password").value=""

    }else{
        alert("credintials not matched")

    }













}

























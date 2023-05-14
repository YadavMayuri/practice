function register(event) {
    event.preventDefault();

    var name = document.getElementById("Name").value
    var email = document.getElementById("Email").value
    var password = document.getElementById("Password").value
    var confirmPassword = document.getElementById("confirmPassword").value

    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password === confirmPassword) {

                var Ls = JSON.parse(localStorage.getItem("practice2-users")) || []
                var flag = false
                for (i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true

                    }

                }
                if (!flag) {
                    var userdata2 = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmPassword
                    }
                    Ls.push(userdata2)
                    localStorage.setItem("practice2-users", JSON.stringify(Ls))
                    alert("registration successfull")
                    window.location.href = "./demo-login.html"
                    document.getElementById("Name").value = ""
                    document.getElementById("Email").value = ""
                    document.getElementById("Password").value = ""
                    document.getElementById("confirmPassword").value = ""
                } else {
                    alert("email already exist")
                }


            } else {
                alert("password not matched")
            }

        } else {
            alert("password should be 8 or more characters")
        }

    } else {
        alert("fill all fields")
    }


}


function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("Email").value
    var userPassword = document.getElementById("Password").value

    var Ls = JSON.parse(localStorage.getItem("practice2-users"))
    var flag = false;
    var currentUser2;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true
            currentUser2=Ls[i]
        }
    }
    if (flag == true) {
        localStorage.setItem("currentUser2",JSON.stringify(currentUser2))
        window.location.href = "./demo-home.html"
        alert("login succefull")

    } else {
        alert("credintials not matched")
    }
}




























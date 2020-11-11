var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");
var success = document.getElementById("success");

function onSingup() {
    error.innerHTML = "";
    success.innerHTML = "";
    var getUsersFromStorage = localStorage.getItem("users");
    var users = JSON.parse(getUsersFromStorage)
    if (!users) {
        users = []
    }
    // set a flag
    var isEmailExist = false;
    for (let i = 0; i < users.length; i++) {
        var user = users[i];
        // checking email exist or not
        if (user.email === email.value) {
            // email exist
            isEmailExist = true;
            break;
        }
    }
    if (isEmailExist) {
        error.innerHTML = email.value + " Already exist";
    } else {
        users.push({
            email: email.value,
            password: password.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
        // success.innerHTML = "Account create successfully";
        success.innerHTML = alert("Account create successfully");

    }

}


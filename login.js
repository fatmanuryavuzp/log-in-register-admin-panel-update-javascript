function loginAsAdmin() {
    const request = new XMLHttpRequest();
    var admin_name = document.getElementById("Aname");
    var admin_pass = document.getElementById("APass");
    request.open('GET', "https://60281788dd4afd001754af46.mockapi.io/api/admin", true);
    request.onload = function() {

        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.forEach((info) => {

                if (info.a_name == admin_name.value &&
                    info.admin_pass == admin_pass.value) {
                    alert("Redirecting the admin page...");
                    location.href = "Admin.html";

                } else {
                    alert("Password or username is wrong");
                }

            });
        } else {
            console.log('error');
        }
    }
    request.send()
}



function loginAsUser() {
    const request = new XMLHttpRequest();
    var u_name = document.getElementById("Uname");
    var u_pass = document.getElementById("UPass");
    var control = "unknown";
    request.open('GET', "https://60281788dd4afd001754af46.mockapi.io/api/users", true);
    request.onload = function() {

        let data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            for (let info of data) {
                if (info.user_name == u_name.value &&
                    info.user_pass == u_pass.value && control == "unknown") {
                    alert("Welcome to the my personal page!");
                    control = "giris";
                    window.location = "homepage.html";

                    break;
                } else {
                    alert("Your password or username is wrong!");
                }

            }



        } else {
            console.log('error');
        }
    }
    request.send()
}
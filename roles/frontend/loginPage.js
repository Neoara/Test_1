const loginInput = $("#login_input");
const passwordInput = $("#password_input");
const logInBtn = $("#log_in_btn");

logInBtn.click(() => {
    let settings = {
        url: "http://localhost:8080/users/login",
        method: "post",
        data: {
            login: loginInput.val(),
            password: passwordInput.val()
        },
        success: (res) => {
            localStorage.setItem('user', JSON.stringify(res));
            location.href = "index.html"
        },
        error: () => {
            alert('error')
        }
    };

    $.ajax(settings);
});
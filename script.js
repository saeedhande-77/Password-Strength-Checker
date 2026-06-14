function checkPassword() {

    let password =
        document.getElementById("password").value;

    let score = 0;

    let result =
        document.getElementById("result");

    let tips =
        document.getElementById("tips");

    let bar =
        document.getElementById("bar");

    bar.className = "bar";

    if(password.length >= 8)
        score++;

    if(/[A-Z]/.test(password))
        score++;

    if(/[a-z]/.test(password))
        score++;

    if(/[0-9]/.test(password))
        score++;

    if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
        score++;

    if(password.length === 0){

        result.innerHTML = "";
        tips.innerHTML = "";
        bar.className = "bar";
        return;
    }

    if(score <= 2){

        result.innerHTML =
            "🔴 Weak Password";

        tips.innerHTML =
            "Add uppercase letters, numbers and special characters.";

        bar.classList.add("weak");
    }

    else if(score <= 4){

        result.innerHTML =
            "🟡 Medium Password";

        tips.innerHTML =
            "Good password, but it can be stronger.";

        bar.classList.add("medium");
    }

    else{

        result.innerHTML =
            "🟢 Strong Password";

        tips.innerHTML =
            "Excellent password security.";

        bar.classList.add("strong");
    }
}
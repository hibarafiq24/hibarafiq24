function abc() {
    var inputs = document.getElementsByClassName("input");
    var errors = document.getElementsByClassName("error");
    var mainError = document.getElementById("mainError");
    var emptyCount = 0;

    mainError.textContent = "";
    for (var i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            errors[i].textContent = "Please fill this field.";
            emptyCount++;
        }
    }

    if (emptyCount === inputs.length) {
        mainError.textContent = "Please fill all the fields.";
    }

    if (emptyCount === 0) {
        mainError.style.color = "green";
        mainError.textContent = "Form submitted successfully!";
    } else {
        mainError.style.color = "red";
    }
}
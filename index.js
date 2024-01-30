const removeAlreadyclass = (id) => {

    let element = document.getElementById(id);

    if (!element.classList.contains('d-none'))
        element.classList.add('d-none')
}

const setError = (id, error) => {
    let element = document.getElementById(id);

    element.classList.remove('d-none')
    element.innerHTML = error;
    element.style.color = "red";
}


const checkValidator = (event) => {

    for (let i = 1; i <= 4; i++) {
        removeAlreadyclass(i);
    }

    let first_name = document.querySelector("#fname").value;
    let last_name = document.querySelector('#lname').value;
    let phone = document.querySelector('#phone').value;
    let city = document.querySelector('#city').value;

    let containError = false;

    let alphabet = /^[a-zA-Z]+$/, num = /^[0-9]*$/;

    if (!alphabet.test(first_name) || first_name.length > 10) {
        containError = true;
        if (!alphabet.test(first_name)) {
            setError(1, "First name should only contain alphabets")
        }
        else {
            setError(1, "First name should not be greater than 10")
        }
    }

    if (!alphabet.test(last_name) || last_name.length > 10) {
        containError = true;
        if (!alphabet.test(last_name)) {
            setError(2, "Last name should only contain alphabets")
        }

        else {
            setError(2, "Last name should not be greater than 10")
        }
    }

    if (!(num.test(phone)) || phone.length != 10) {
        containError = true;

        if (!(num.test(phone))) {
            setError(3, "Phone should only contains number")
        }
        else {
            setError(3, "Phone number should be of size 10")

        }
    }

    if (!alphabet.test(city) || city.length > 10) {
        containError = true;
        if (!alphabet.test(city)){
            setError(4, "City name should only contain alphabets")
        }
        else{
            setError(4, "City Name should not be greater than 10")
        }
    }

    if (containError) {
        event.preventDefault();
        return;
    }

}
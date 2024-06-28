// creating JavaScript to handle validation of user input in form
    // getting the needed documents related to form
    const form = document.querySelector('.comments_form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email_address');
    const rated_container = document.querySelector('.rating_container');
    const reason = document.querySelector('#reason');

    // creating event to occur on click of the submit button
    form.addEventListener('submit',(event)=>{
        // calling validateForm() function later defined to validate user inputs
        validateForm();
        // calling submitForm() function later defined to check if all input are valid
        if(submitForm() == true){
            // if all inputs are valid form is submitted
            form.submit();
            // on submission, call the function to toggle visible and invisible classes of the contact_us_form and thank_you screen
            back_to_form();
        }else{
            // if not all input are valid, prevent the submission
            event.preventDefault();
        }
    });

    // creating function to toggle visible and invisible classes of contact_us_form and thank_you screen
    function back_to_form(){
        // getting the contact_us_form_container and then changing its visible and invisible classes
        var element = document.getElementById('comments_form_container');
        element.classList.toggle('visible');
        element.classList.toggle('invisible');
        // getting the thank_you and then changing its visible and invisible classes
        element = document.getElementById('thank_you');
        element.classList.toggle('visible');
        element.classList.toggle('invisible');
    }

    // creating a function that checks for the error class in input fields and returns true if all .form_input_container have no error class
    function submitForm(){
        let submit = true;
        // selecting all elements with form_input_container class
        const formInputs = form.querySelectorAll('.form_input_container');
        // checking for the error class in each selected element
        formInputs.forEach((div)=>{
            // setting the submit variable's value to false if the error class exists
            if(div.classList.contains('error')){
                submit = false;
            }
        });
        // returning the value of the submit variable
        return submit;
    }

    // creating function to validate the input in the rating_container class
    function validate_rating(){
        let rated = false;
        // selecting all elements with the rating_result class
        const ratingInputs = rated_container.querySelectorAll('.rating_result');
        // checking if any radio button is checked for each selected element
        ratingInputs.forEach((div)=>{
            // setting the rated variable's value as true if any radio button is checked
            if(div.checked === true){
                rated=true;
            }
        });
        // returning the value of the rated variable
        return rated;
    }

    // creating function to validate user inputs
    function validateForm(){
        // taking the input value of the username input field and checking if it is empty
        if(username.value.trim() === ''){
            // if empty, call setError() function while giving an error text to be displayed
            setError(username, 'Name Is Required!');
        }else if(username.value.trim().length < 3){
            // if username has a character length shorter than 3, call setError() function while giving an error text to be displayed
            setError(username, 'Name Must Have A Minimum Of 3 Characters!');
        }else{
            // use setSuccess() if the input is valid
            setSuccess(username);
        }

        // similar method to above used to validate other inputs
        if(email.value.trim() === ''){
            setError(email, 'Email Address Is Required!');
        }else if(emailValidity(email.value)){
            setSuccess(email);
        }else{
            setError(email, 'Email Address Invalid!');
        }

        if(reason.value.trim() === ''){
            setError(reason, 'Reason For Giving Rating Is Required!');
        }else if(reason.value.trim().length < 20){
            setError(reason, 'Reason Must Have A Minimum Of 20 Characters!');
        }else{
            setSuccess(reason);
        }

        if(validate_rating() === false){
            setError(rated_container, 'Rating Is Required!');
        }else{
            setSuccess(rated_container);
        }
    }

    // creating function to add an error class while removing a success class from the parent element of the parent element
    // also prints the error message
    function setError(element, errorMsg){
        const parent = element.parentElement.parentElement;
        if(parent.classList.contains('success')){
            parent.classList.remove('success');
        }
        parent.classList.add('error');
        const p = parent.querySelector('.error_msg');
        p.textContent = errorMsg;
    }

    // creating function to add a success class while removing an error class from the parent element of the parent element
    function setSuccess(element){
        const parent = element.parentElement.parentElement;
        if(parent.classList.contains('error')){
            parent.classList.remove('error');
        }
        parent.classList.add('success');
    }

    // creating function that checks the validity of an email and returns true if valid and false if invalid
    function emailValidity(email){
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }
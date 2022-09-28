
function validate() {
    var name = document.getElementById("fname").value;

    if (document.getElementById("fname").value == "") {
        alert("Please Enter your first name to continue");
    }
    else if (document.getElementById("surname").value == "") {
        alert("Please Enter your Surname to continue");
    }
    else if (document.getElementById("email").value == "") {
        alert("Please Enter your Email to continue");
    }
    else if (document.getElementById("password").value == "") {
        alert("Please Enter your Password to continue");
    }
    else if (document.getElementById("dob").value == "") {
        alert("Please Enter your DOB to continue");
    }
    else {

        var text = ("Thank you " + name + " for creating an account with us");
        alert(text);
    }
}
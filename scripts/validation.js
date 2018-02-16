let emailpattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let btn = document.getElementById("subBtn");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let errorMessage = "";

    if (document.getElementById("fname").value === "") {
        errorMessage += "Ange ett förnamn \n";
    }
    if (document.getElementById("lname").value === "" ) {
        errorMessage += "Ange ett efternamn";
    }
    if (document.getElementById("email").value === "") {
        errorMessage += "Ange email adress \n";
    }
    if (!emailpattern.test(email.value)) {
        errorMessage += "Ange en giltig email \n";
    }
    if (document.getElementById("phone").value === "") {
        errorMessage += "Ange ett telefonnummer \n";
    }
    if (document.getElementById("address").value === "") {
        errorMessage += "Ange adress \n";
    }
    if (document.getElementById("zipcode").value === "") {
        errorMessage += "Ange postnummer \n";
    }
    if (document.getElementById("city").value === "") {
        errorMessage += "Ange stad \n";
    }
    if (errorMessage !== ""){
        alert(errorMessage);
        return false;
    }
    document.getElementById("myForm").submit (alert("Ditt meddelande är skickat"));
});

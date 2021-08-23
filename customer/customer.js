function onSignup() {
    // get input values
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var Address = document.getElementById("Address")
    var Age = document.getElementById("Age")
    var MobileNumber = document.getElementById("MobileNumber")
    var message = document.getElementById("message");

    var user = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
        Address: Address.value,
        Age: Age.value,
        MobileNumber: MobileNumber.value
        

    }

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    message.innerHTML = "Signup Successfull "
    setTimeout(() => {
        message.innerHTML = "";
        location.href = "customerlogin.html";
    }, 3000);

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    message.innerHTML =  errorMessage
    setTimeout(() => {
        message.innerHTML = "";
        
    }, 2000);
    // console.log(errorCode)
    // console.log(errorMessage)
    // ..
  });
}



function login(){
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  console.log("successfully login")
  console.log(user);
  window.location= "cindex.html"
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
});

}

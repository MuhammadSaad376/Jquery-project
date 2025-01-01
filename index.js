// window.onload = function () {
//   checkDataSaved();
//   getFormValue();
// };

// function formValue() {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   checkDataSaved();
//   //   var savedData = localStorage.getItem("data");
//   //   if (savedData) {
//   //     savedData = JSON.parse(savedData);
//   //     if (email === savedData.email && password === savedData.password) {
//   //       //   alert("Please fill the form with new values");
//   //       //   window.location.href = "home.html";
//   //     } else {
//   var data = {
//     email: email,
//     password: password,
//   };
//   localStorage.setItem("data", JSON.stringify(data));
//   clearfield();
//   console.log(data);
// }

// function checkDataSaved() {
//   var data = localStorage.getItem("data");
//   if (data) {
//     data = JSON.parse(data);
//     if (data.email && data.password) {
//       window.location.href = "home.html";
//     }
//   }
// }
// function getFormValue() {
//   var data = localStorage.getItem("data");
//   if (data) {
//     data = JSON.parse(data);
//     document.getElementById("email").value = data.email;
//     document.getElementById("password").value = data.password;
//   }
// }
// function clearfield() {
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";
// }
// function reset() {
//   localStorage.removeItem("data");
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";
// }

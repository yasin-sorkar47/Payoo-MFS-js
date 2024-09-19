// listen the button tag and prevent the form reload
document
  .getElementById("logIn-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // red the input value
    let numberInput = document.getElementById("number-input").value;
    let pinInput = document.getElementById("pin-input").value;

    // bad validate
    if (numberInput === "47" && pinInput === "1234") {
      window.location.href = "./amount.html";
    } else {
      alert("please add a valid number or pin.");
    }
  });

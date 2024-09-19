// <----------Add Money related code --------------->
// <<<---------------------------------------------------------------------------->>>

// add the addEventListener and prevent form reload
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // red the value
    let amountInputValue = document.getElementById("amount-input").value;
    let addAmountPinInputValue = document.getElementById(
      "add-amount-pin-input"
    ).value;
    let firstAmount = document.getElementById("first-amount").innerText;

    // check the pin
    if (addAmountPinInputValue === "1234") {
      // make sting to Number
      let makeAmountInputValueIntoNumber = parseFloat(amountInputValue);
      let makeFirstAmount = parseFloat(firstAmount);

      let totalAmount = makeFirstAmount + makeAmountInputValueIntoNumber;
      document.getElementById("first-amount").innerText = totalAmount;
    } else {
      alert("please enter a valid pin.");
    }
  });

//   switch to add money form
document
  .getElementById("add-money-main-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cashOut-form").classList.add("hidden");
  });

// <<<------------------------------------------------------------------------------>>>
// <----------cashOut related code --------------->
// <<<---------------------------------------------------------------------------->>>

document
  .getElementById("cashOut-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // red the value
    let amountInputValue = document.getElementById(
      "cashOut-amount-input"
    ).value;
    let addAmountPinInputValue = document.getElementById(
      "cashOut-amount-pin-input"
    ).value;
    let firstAmount = document.getElementById("first-amount").innerText;

    // check the pin
    if (addAmountPinInputValue === "1234") {
      // make sting to Number
      let makeAmountInputValueIntoNumber = parseFloat(amountInputValue);
      let makeFirstAmount = parseFloat(firstAmount);

      let totalAmount = makeFirstAmount - makeAmountInputValueIntoNumber;

      document.getElementById("first-amount").innerText = totalAmount;
    } else {
      alert("please enter a valid pin.");
    }
  });

document
  .getElementById("cashOut-main-btn")
  .addEventListener("click", function () {
    document.getElementById("cashOut-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });

// <<<------------------------------------------------------------------------------>>>
// <----------log Out related code --------------->
// <<<---------------------------------------------------------------------------->>>

document.getElementById("logOut").addEventListener("click", function () {
  window.location.href = "./logIn.html";
});

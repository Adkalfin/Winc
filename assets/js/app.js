const payments = document.getElementsByName("paymentMethod");
const creditCard = document.getElementById("creditCard");
const debitCard = document.getElementById("debitCard");
const paypalCard = document.getElementById("paypalCard");

payments.forEach((item) => {
  item.addEventListener("change", (event) => {
    console.log(event.target.value);
    if (event.target.value == "creditCard") {
      creditCard.classList.remove("d-none");
      debitCard.classList.add("d-none");
      paypalCard.classList.add("d-none");
    } else if (event.target.value == "debitCard") {
      debitCard.classList.remove("d-none");
      creditCard.classList.add("d-none");
      paypalCard.classList.add("d-none");
    } else {
      paypalCard.classList.remove("d-none");
      debitCard.classList.add("d-none");
      creditCard.classList.add("d-none");
    }
  });
});

const payments = document.getElementsByName("paymentMethod");
const pinc = document.getElementById("pinc");
const creditCard = document.getElementById("creditCard");
const debitCard = document.getElementById("debitCard");
const paypalCard = document.getElementById("paypalCard");

payments.forEach((item) => {
  item.addEventListener("change", (event) => {
    if (event.target.value == "credit") {
      pinc.textContent = "Credit Card";
      creditCard.classList.remove("d-none");
      debitCard.classList.add("d-none");
      paypalCard.classList.add("d-none");
    } else if (event.target.value == "debit") {
      pinc.textContent = "Bank Transfer";
      debitCard.classList.remove("d-none");
      creditCard.classList.add("d-none");
      paypalCard.classList.add("d-none");
    } else {
      pinc.textContent = "PayPal";
      paypalCard.classList.remove("d-none");
      debitCard.classList.add("d-none");
      creditCard.classList.add("d-none");
    }
  });
});

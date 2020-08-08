const number = document.querySelector("input#number");
const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (number.value === "") {
    alert("Enter a valid number please");
  } else {
    fetch(`https://numbers-api.vercel.app/${number.value}`)
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      });
  }
});

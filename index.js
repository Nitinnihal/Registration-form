const btnEl = document.getElementById("btn");

function backendHandler(e) {
  e.preventDefault();
  console.log(e.target.name.value);
  console.log(e.target.email.value);
  console.log(e.target.number.value);
  console.log(e.target.date.value);
  console.log(e.target.time.value);
}

const form = document.querySelector("form");
const buttonForm = document.querySelector("form button");
const inputForm = document.querySelector("form input");

const linkNavigate = document.querySelector("a.navigation");

function handleSubmitEmail() {
  let inputValue = inputForm.value;

  if (inputValue === "") {
    alert("Preencha com um E-mail válido!");
    return;
  }

  alert("Seu E-mail foi enviado com sucesso!!");

  localStorage.setItem("@rocket-news", JSON.stringify(inputValue));
  inputForm.value = "";
}

function navigate() {
  alert("Por enquanto você não vai pode ler.");
}

buttonForm.addEventListener("click", handleSubmitEmail);
linkNavigate.addEventListener("click", navigate);

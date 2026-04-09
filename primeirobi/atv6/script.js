const input = document.getElementById("tarefaInput");
const botao = document.getElementById("addBtn");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  lista.appendChild(li);

  input.value = "";
});

lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

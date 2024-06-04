const inputConta = document.querySelector("#conta");
const inputPessoas = document.querySelector("#pessoas");
const pessoasErro = document.querySelector(".erro");
const inputEscolhePorcentagem = document.querySelector("#custon");
const valorGorgeta = document.querySelector("#valorGorgeta");
const valorTotal = document.querySelector("#valorTotal");
const btnLimpar = document.querySelector("#btn-limpar");
const botoes = document.querySelectorAll(
  ".botoes-porcentagens input[type='button']"
);

let conta = 0;
let pessoas = 0;
let porcentagen = 0;

inputConta.addEventListener("input", calcularConta);

function calcularConta(event) {
  conta = parseFloat(event.target.value);
  calcular();
}

inputPessoas.addEventListener("input", calcularPessoas);

function calcularPessoas(event) {
  pessoas = parseInt(event.target.value);
  if (pessoas <= 0) {
    pessoasErro.style.display = "block";
    inputPessoas.style.borderColor = " #e65757";
  } else {
    pessoasErro.style.display = "none";
    inputPessoas.style.borderColor = " #26c0ab";
  }
  calcular();
}
botoes.forEach((button) => {
  button.addEventListener("click", escolherPorcentagem);
  porcentagen = parseFloat(button.value) / 100;

  calcular();
});

inputEscolhePorcentagem.addEventListener("input", escolherPorcentagem);

function escolherPorcentagem(event) {
  porcentagen = parseFloat(event.target.value) / 100;
  botoes.forEach((button) => {
    if (button.value === event.target.value) {
      button.style.backgroundColor = "#26c0ab";
      button.style.color = "#00494d";
      inputEscolhePorcentagem.value = "";
    } else {
      button.style.backgroundColor = "#00494d";
      button.style.color = "#ffffff";
    }
  });

  calcular();
}
function calcular() {
  if (conta > 0 && pessoas > 0 && porcentagen > 0) {
    valorGorgeta.innerHTML = `$${((porcentagen * conta) / pessoas).toFixed(2)}`;
    valorTotal.innerHTML = `$${(
      (conta + porcentagen * conta) /
      pessoas
    ).toFixed(2)}`;
  }
}

btnLimpar.addEventListener("click", () => {
  conta = 0;
  pessoas = 0;
  porcentagen = 0;
  inputConta.value = "";
  inputPessoas.value = "";
  valorGorgeta.innerHTML = "$0.00";
  valorTotal.innerHTML = "$0.00";
  botoes.forEach((button) => {
    button.style.backgroundColor = "#00494d";
    button.style.color = "#ffffff";
  });
});

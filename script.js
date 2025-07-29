function inserirNome () {
    let nomeUsuario = prompt ("Qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    console.log (elemento);
    elemento.textContent = nomeUsuario;
}

inserirNome();

let aluno1 = {
    nome: "Rafael",
    idade: 29,
    anoLetivo: "Universidade",
    materiasFavoritas; ["Matmática", "Programação", "Física"]
}

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.materiasFavoritas[2];


console.log(aluno1.nome); // "Rafael"
console.log(aluno1.idade); // 29
console.log(aluno1.materiasFavoritas);
// ["Matemática","Programação","Física"]
console.log(aluno1.materiasFavoritas[2]); // "Física"

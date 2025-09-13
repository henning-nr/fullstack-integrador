function listar() {
    fetch(url)
        .then((res) => { return res.json() })
        .then((alunos) => {
            console.log(alunos)

            alunosList = ""
            for (let aluno of alunos) {
                alunosList += `
                              <tr>
                                 <td>${aluno.nome}</td>
                                 <td>${aluno.idade}</td>
                                 <td>${aluno.sexo}</td>
                                 <td>${aluno.matricula}</td>
                                 <td>
                                   <button onclick="editar(${aluno.id})">Editar</button>
                                   <button onclick="excluir(${aluno.id})">Excluir</button>
                                 </td>
                              </tr>  
                              `
            }

            document.querySelector("tbody").innerHTML = alunosList
        })
}

listar()
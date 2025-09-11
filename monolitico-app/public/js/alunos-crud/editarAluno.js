       function editarAluno(idAluno) {
            console.log("vou editar o aluno", idAluno)
            inputs = document.querySelectorAll("input")

            fetch(url + idAluno)
                .then((res) => { return res.json() })
                .then((aluno) => {
                    console.log("aluno veio", aluno)
                    inputs[0].value = aluno.id
                    inputs[1].value = aluno.nome
                    inputs[2].value = aluno.idade
                    inputs[3].value = aluno.sexo
                    inputs[4].value = aluno.matricula
                })
        }
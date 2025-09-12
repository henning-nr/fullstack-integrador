       function editarDisciplina(idDisciplina) {
            console.log("vou editar o disciplina", idDisciplina)
            inputs = document.querySelectorAll("input")

            fetch(url + idDisciplina)
                .then((res) => { return res.json() })
                .then((disciplina) => {
                    console.log("disciplina veio", disciplina)
                    inputs[0].value = disciplina.id
                    inputs[1].value = disciplina.nome
                    inputs[2].value = disciplina.curso
                    inputs[3].value = disciplina.turno
                })
        }
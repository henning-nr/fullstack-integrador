       function atualizarDisciplina() {
            inputs = document.querySelectorAll("input")

            idDisciplina = inputs[0].value

            disciplina = {
                nome: inputs[1].value,
                curso: inputs[2].value,
                turno: inputs[3].value,
            }

            fetch(url + idDisciplina, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(disciplina)
            })
                .then((res) => { return res.json() })
                .then((disciplinaSalvo) => {
                    pegarDisciplina()

                    inputs[0].value = ""
                    inputs[1].value = ""
                    inputs[2].value = ""
                    inputs[3].value = ""
                })
        }
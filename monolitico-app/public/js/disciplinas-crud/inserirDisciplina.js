        function inserirDisciplina() {
            inputs = document.querySelectorAll("input")

            disciplina = {
                nome: inputs[1].value,
                curso: inputs[2].value,
                turno: inputs[3].value
            }

            fetch(url, {
                method: 'POST',
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
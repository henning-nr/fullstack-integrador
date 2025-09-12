        function excluirDisciplina(idDisciplina) {
            fetch(url + idDisciplina, {
                method: 'DELETE'
            })
                .then((res) => { return res.json() })
                .then((disciplinaSalvo) => {
                    pegarDisciplinas()
                })

        }
        function excluirAluno(idAluno) {
            fetch(url + idAluno, {
                method: 'DELETE'
            })
                .then((res) => { return res.json() })
                .then((alunoSalvo) => {
                    pegarAlunos()
                })

        }
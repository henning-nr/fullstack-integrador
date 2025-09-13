function editar(id) { // aqui recebe o id para pegar o dado do recurso
    console.log("editando", id)

    fetch(url + id, {
        method: "GET"
    })
        .then((res) => { return res.json() })
        .then((dados) => {
            console.log(dados)

            for (let prop in dados) {
                document.getElementById(prop).value = dados[prop] 
            }

        })
}

function atualizar() {
    formAluno = document.getElementById("formAluno")

    let dados = new FormData(formAluno)

    const obj = Object.fromEntries(dados.entries());
    console.log(obj)
    let id = obj.id
    delete obj.id

    fetch(url + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj) // aqui vai direto o FormData
    })
        .then((res) => { return res.json() })
        .then((da) => { console.log(da) })
}
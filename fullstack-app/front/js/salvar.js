function salvar() {
    formAluno = document.getElementById("formAluno")

    let dados = new FormData(formAluno)

    const obj = Object.fromEntries(dados.entries());
    console.log(obj)

    delete obj.id

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj) // aqui vai direto o FormData
    })
        .then((res) => { return res.json() })
        .then((da) => { console.log(da) })
}
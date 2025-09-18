function salvar(idForm) {
    form = document.getElementById(idForm)

    let dados = new FormData(form)

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
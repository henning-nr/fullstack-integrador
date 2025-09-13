function listar() {
    fetch(url)
        .then((res) => { return res.json() })
        .then((dados) => {
            console.log(dados)

            dadosList = ""

            for (let dado of dados) {
                id = dado.id
                delete dado.id
                let values = ""
                for (let prop in dado) {
                    values += `<td>${dado[prop]}</td>`
                }
                console.log('dado montado', values)
                dadosList += `
                              <tr>
                                 ${values}
                                 <td>
                                   <button onclick="editar(${id})">Editar</button>
                                   <button onclick="excluir(${id})">Excluir</button>
                                 </td>
                              </tr>  
                              `
            }

            document.querySelector("tbody").innerHTML = dadosList
        })
}


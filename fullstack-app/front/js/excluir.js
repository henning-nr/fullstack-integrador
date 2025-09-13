function excluir(id){
    console.log("excluindo", id)

    fetch(url+id,{
        method: "DELETE"
    })
    .then((res)=>{return res.json()})
    .then((dados)=>{console.log("excluindo", dados)})
}
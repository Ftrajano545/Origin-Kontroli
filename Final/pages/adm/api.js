async function produtos() {
    let url = "https://689e79853fed484cf87738b7.mockapi.io/Produtos"
    let response = await fetch(url)
    let data = await response.json()

    for(let i = 0; i < data.length; i++){
        let cadaProd = data[i]
        let container = document.querySelector("#leBodyproductsTab")
        let html = `
        <tr>
                <td>${cadaProd.nome}</td>git commit -m "Primeiro commit"

                <td>${cadaProd.codigo}</td>
                <td>${cadaProd.quantidade}</td>
                <td>${cadaProd.estoqueMin}</td>
                <td>${cadaProd.preco}</td>
                <td>${cadaProd.descricaoProd}</td>
                
            </tr>`
        container.innerHTML += html
    }
}
produtos()
async function adicionaProduto() {

    let url = "https://689e79853fed484cf87738b7.mockapi.io/Produtos"
    let nomeProd = document.querySelector("#productName").value
    let codigo = document.querySelector("#productCode").value
    let quantidade = document.querySelector("#productQuantity").value
    let minimo = document.querySelector("#productMinStock").value
    let preco = document.querySelector("#productPrice").value
    let descricao = document.querySelector("#productDescription").value
    

    let novoProd= {
        'nome': nome,
        'codigo': codigo,
        'quantidade': quantidade,
        'estoqueMin': estoqueMin,
        'preco': preco,
        'descricao': descricao
    }
    let response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProd)
    })
    window.location.reload()
}
adicionaProduto()
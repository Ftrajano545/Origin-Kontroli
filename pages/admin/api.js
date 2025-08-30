let url = "https://689e79853fed484cf87738b7.mockapi.io/Produtos"
async function produtos() {
    let response = await fetch(url)
    let data = await response.json()

    for (let i = 0; i < data.length; i++) {
        let cadaProd = data[i]
        let container = document.querySelector("#productsTableBody")

        let alerta = `
        <img width="20" height="20" src="https://img.icons8.com/ios-filled/20/FA5252/error--v1.png" alt="error--v1"/>

        `

        let status = ''
        let quantidade = cadaProd.quantity
        let minStock = cadaProd.minStock
        
        quantidade < minStock ? status = alerta : status = "Em estoque"


        let html = `
            <tr>
                <td>
                    <p>${cadaProd.name}</p>
                    <p class="descricao">${cadaProd.description}</p>
                </td>
                <td>${cadaProd.code}</td>
                <td>${cadaProd.category}</td>
                <td>${cadaProd.quantity}</td>
                <td>${cadaProd.minStock}</td>
                <td>${cadaProd.price}</td>
                <td>${status}</td>
                <td>
                    <button onclick="openEditModal('${cadaProd.id}')">Editar</button>
                    <button onclick="deletaProduto('${cadaProd.id}')">Excluir</button>
                </td>
                
            </tr>`
        container.innerHTML += html
    }
}
produtos()
async function adicionaProduto() {

    let name = document.querySelector("#productName").value
    let code = document.querySelector("#productCode").value
    let quantity = document.querySelector("#productQuantity").value
    let minStock = document.querySelector("#productMinStock").value
    let price = document.querySelector("#productPrice").value
    let description = document.querySelector("#productDescription").value


    let novoProd = {
        'name': name,
        'code': code,
        'quantity': quantity,
        'minStock': minStock,
        'price': price,
        'description': description
    }
    let response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProd)
    })
    window.location.reload()

}
//deletar
async function deletaProduto(id) {

    let response = await fetch(`${url}/${id}`, {
        method: "DELETE"
    })

    window.location.reload()
}
    



function openModal() {
    document.querySelector("#productModal").style.display = "flex"
}

function fecharModal() {
    document.querySelector("#productModal").style.display = "none"

}
function openEditModal(id) {
    document.querySelector("#productEditModal").style.display = "flex"
    getId(id)
}

function fecharEditModal() {
    document.querySelector("#productEditModal").style.display = "none"

}

//put

async function getId(id) {
    document.querySelector("#getId").value = id
}

async function updateProduct() {
    let id = document.querySelector("#getId").value

    let name = document.querySelector("#productNameEdit").value
    let code = document.querySelector("#productCodeEdit").value
    let quantity = document.querySelector("#productQuantityEdit").value
    let minStock = document.querySelector("#productMinStockEdit").value
    let price = document.querySelector("#productPriceEdit").value
    let description = document.querySelector("#productDescriptionEdit").value

    let novoProd = {
        'name': name,
        'code': code,
        'quantity': quantity,
        'minStock': minStock,
        'price': price,
        'description': description
    }

    let response = await fetch(`${url}/${id}`,{
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(novoProd)
    })
        window.location.reload()

}
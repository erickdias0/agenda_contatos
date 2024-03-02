const form = document.getElementById('formulario')
const nomeContato = document.getElementById('nome-contato')
const telContato = document.getElementById('telefone-contato')
let linhas = ''
let total =0
const contatos = [] 

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(contatos.includes(nomeContato.value)){
        alert(nomeContato.value + ' já está na Agenda.')
        return
    } else{
        contatos.push(nomeContato.value)
    }
    incluiContato()
    limpaInputs()
})


function incluiContato(){
    
    
    let linha = '<tr>'
    linha += `<td class="tab-nome"> ${nomeContato.value} </td>`
    linha += `<td class="tab-tel"> ${telContato.value}</td>`
    linha += `</tr>`
    console.log(linha)
    total++
    linhas += linha
    const corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas
}

function limpaInputs(){
    nomeContato.value =''
    telContato.value=''
}
//Constantes
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)


//Funções
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists){
        alert('Dia já incluso! 🔴')
        return
    }

    alert('Dia adicionado! 🟢')
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

// document.querySelector("input").click()

// const mensagem = "Hello "
// alert(mensagem + "World!")


// const celular = {
//     cor: 'preto',
//     nome: 'Headshot',
//     ligar: function(){
//         alert(this.cor + this.nome)
//     }
// }

// celular.ligar()// const data = {
//     run: ['01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29'],
//     takePills: ['01-20'],
//     journal: ['01-20']
// }
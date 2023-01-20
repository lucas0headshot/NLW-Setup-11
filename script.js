const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29'],
    takePills: ['01-20'],
    journal: ['01-20']
}

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

// celular.ligar()
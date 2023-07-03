let idsHotels = []
let namesHotels = []
let categoryHotels= []
let adressHotels = []
let phoneHotels = []

let idBooking = []
let nameBooking = []
let entryBooking = []
let exitBooking = []
let quantityBooking = 0

function registerHotel () {
    const quantityHotels = parseInt(prompt('Diga quantos hotels deseja cadastrar'))
    for (let i = 0; i < quantityHotels; i++) {
        const idHotel = parseInt(prompt(`Diga o id do ${i+1}º hotel`))
        const nameHotel = prompt(`Diga o nome do ${i+1}º hotel`)
        const categoryHotel = prompt(`Diga a categoria do ${i+1}º hotel`)
        const adressHotel = prompt(`Diga o endereço do ${i+1}º hotel`)
        const phoneHotel = parseInt(prompt(`Diga o telefone do ${i+1}º hotel`))

        idsHotels.push(idHotel)
        namesHotels.push(nameHotel)
        categoryHotels.push(categoryHotel)
        adressHotels.push(adressHotel)
        phoneHotels.push(phoneHotel)
    }

    const askAction = prompt('Diga o que quer fazer.\nCriar uma reserva.\nBuscar reservas pelo id do hotel.\nBuscar hotel pelo id da reserva.\nBuscar as reservas de alguém pelo seu nome.\nBuscar hotéis por categoria.\nMudar telefone de algum hotel.\nEncerrar programa.')
    switch (askAction) {
        case 'Criar uma reserva':
            quantityBooking = parseInt(prompt('Diga quantas reservas'))
            registerBooking(idsHotels)
            break;
        case 'Buscar reservas pelo id do hotel':
            bringReserve(idsHotels)
            break;
        case 'Buscar hotel pelo id da reserva':
            bringHotel(idBooking)
            break;
        case 'Buscar as reservas de alguém pelo seu nome':
            bringReserveForName(nameBooking)
            break;
        case 'Buscar hotéis por categoria':
            bringCategory(categoryHotels)
            break;
        case 'Mudar telefone de algum hotel':
            const idParam = parseInt(prompt('Diga o id do hotel'))
            const phoneParam = parseInt(prompt('Diga o novo telefone do hotel'))
            updatePhone(idParam, phoneParam)
        default:
            break;
    }
}
registerHotel()

function registerBooking(idHotel){
    const askIdHotel = parseInt(prompt('Diga o id do hotel que quer reservar'))
    if(idHotel.includes(askIdHotel)){
        const idReserve = parseInt(prompt('Diga o id da(s) reserva(s)'))
        if(idHotel.includes(idReserve)) {
            alert('O id precisa ser diferente do id do hotel')
            return registerBooking(idsHotels)
        }
        const nameReserve = prompt('Diga o nome do responsável pela(s) reserva(s)')
        const entryReserve = parseInt(prompt('Diga o dia em nº da entrada'))
        const exitReserve = parseInt(prompt('Diga o dia em nº da saída'))
        if(entryReserve > exitReserve) {
            alert('A data de entrada deve ser menor que a de saída')
            return registerBooking(idsHotels)
        }
        idBooking.push(idReserve)
        nameBooking.push(nameReserve)
        entryBooking.push(entryReserve)
        exitBooking.push(exitReserve)
        //console.log(`Reserva feita no ${namesHotels[0]}, no nome de: ${nameBooking[0]}, entrando dia ${entryBooking[0]} e saindo no dia ${exitBooking[0]}`)
    } else {
        alert('Esse id de hotel não está registrado')
        return registerBooking(idsHotels)
    }
}

function bringReserve(idHotel){
    const idForSeacrh = parseInt(prompt('Diga o id do hotel para fazer a busca'))
    if(idHotel.includes(idForSeacrh)){
        const iName = idHotel.iOf(idForSeacrh)
        console.log(`No hotel ${namesHotels[iName]} há ${quantityBooking} reservas no nome de ${nameBooking[iName]}, entrando dia ${entryBooking[0]} e saindo no dia ${exitBooking[0]}`)
    } else {
        alert('Não há hotel cadastrado com esse id')
        bringReserve(idsHotels)
    }
}

function bringHotel(idReserve){
    const idForSeacrh = parseInt(prompt('Diga o id da reserva para fazer a busca do hotel'))
    if(idReserve.includes(idForSeacrh)){
        const iName = idReserve.iOf(idForSeacrh)
        console.log(`Essa reserva está no hotel ${namesHotels[iName]}, entrando dia ${entryBooking[0]} e saindo no dia ${exitBooking[0]}`)
    } else {
        alert('Não há reserva com esse id')
        bringHotel(idBooking)
    }
}

function bringReserveForName(names){
    const askName = prompt('Diga o nome da pessoa para buscar suas reservas')
    if(names.includes(askName)){
        console.log(`${askName} tem ${quantityBooking} reservas`)
    } else {
        alert('Essa pessoa não possui reservas aqui')
        bringReserveForName(nameBooking)
    }
}

function bringCategory(categoryArr){
    let hotels = []
    const aksCategory = prompt('Diga a categoria para buscar os hotéis')
    for (let i = 0; i < categoryHotels.length; i++) {
        if(aksCategory === categoryArr[i]) hotels.push(namesHotels[i])
    }
    console.log(hotels)
}

function updatePhone(idHotel, newPhone){
    if(idsHotels.includes(idHotel)){
        
        if(phoneHotels.includes(newPhone)) return alert('Já existe hotel com esse telefone')
        for (let i = 0; i < phoneHotels.length; i++) if(idsHotels[i] === idHotel) phoneHotels[i] = newPhone

    } else return alert('Não há hotel com esse id')
    console.log(phoneHotels)
}
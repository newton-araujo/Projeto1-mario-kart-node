//PLAYERS
const play1 = {
    NOME:'MARIO',
    VELOCIDADE:4,
    MANOBRALIDADE:3,
    PODER:3,
    PONTOS:0
};

const play2 = {
    NOME:'BOWSER',
    VELOCIDADE:5,
    MANOBRALIDADE:3,
    PODER:5,
    PONTOS:0
};

/*
Função para simular a rolagem de dados
*/
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRadomBlock() {
    
    let random = Math.random()

    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        
        case random < 0.66:
            result = "CURVA"
            break

        default:
            result = "CONFRONTO"
            break;
    }

    return result

}


//Start Race
async function playRaceEngine(character1, character2) {

    for(let round = 1; round <= 5; round++){

        console.log(`🏁 Rodada ${round}`)

        let block = await getRadomBlock()
        console.log(`BLOCO: ${block}`)
    }

    //Rolar os dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    //Teste de habilidades
    let testSkill1 = 0
    let testSkill2 = 0

    
}


//Main
(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${play1.NOME} e ${play2.NOME} começando... \n`)

    await playRaceEngine(play1,play2)
})()


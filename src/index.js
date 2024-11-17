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


//Criando Confronto
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

async function logRollResult(characterName, block, diceResult, attribute) {
    
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)

}



//Start Race
async function playRaceEngine(character1, character2) {

    for(let round = 1; round <= 5; round++){

        console.log(`🏁 Rodada ${round}`)

        let block = await getRadomBlock()
        console.log(`BLOCO: ${block}`)


                //Rolar os dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //Teste de habilidades
        let testSkill1 = 0
        let testSkill2 = 0

        if (block === "RETA"){

            testSkill1 = diceResult1 + play1.VELOCIDADE
            testSkill2 = diceResult2 + play2.VELOCIDADE

            await logRollResult(play1.NOME,"VELOCIDADE",diceResult1,character1.VELOCIDADE)
            await logRollResult(play2.NOME,"VELOCIDADE",diceResult2,character2.VELOCIDADE)
        }

        
        if (block === "CURVA"){

            testSkill1 = diceResult1 + play1.MANOBRALIDADE
            testSkill2 = diceResult2 + play2.MANOBRALIDADE

            await logRollResult(play1.NOME,"MANOBRALIDADE",diceResult1,character1.MANOBRALIDADE)
            await logRollResult(play2.NOME,"MANOBRALIDADE",diceResult2,character2.MANOBRALIDADE)

        }

        if (block === "CONFRONTO"){
            let powerResult1 = diceResult1 + play1.PODER
            let powerResult2 = diceResult2 + play2.PODER

            console.log(`${character1.NOME} confrontou com ${character2.NOME}`)

            await logRollResult(play1.NOME,"PODER",diceResult1,character1.PODER)
            await logRollResult(play2.NOME,"PODER",diceResult2,character2.PODER)


            powerResult2 -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;
            powerResult1 -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0; 

            console.log(powerResult1 === powerResult2 ? "CONFRONTO EMPATADO! NENHUM PONTO FOI PERDIDO":"")
            
        }

        if (testSkill1 > testSkill2){
            console.log(`${character1.NOME} marcou um ponto`)
            character1.PONTOS++
        }else if (testSkill2 > testSkill1){
            console.log(`${character2.NOME} marcou um ponto`)
            character2.PONTOS++
        }


        console.log('----------------------------------------------------')

    }


}


//Main
(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${play1.NOME} e ${play2.NOME} começando... \n`)

    await playRaceEngine(play1,play2)
})()

